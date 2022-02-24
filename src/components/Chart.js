import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import database from "../firebase";
import { useState, useRef, useEffect } from "react";
import { colors, borders } from "../helpers/constants";
import { getIdNumber } from "../helpers/helper";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ axis, chartSwitch, timeWindow }) => {
  const chartRef = useRef();
  const [chartData, setChartData] = useState([]);

  // load data from api into local state
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://progressiontracker-7ea67-default-rtdb.firebaseio.com/WeeklyChartData.json`
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();
      const chartData = [];

      // weekly vs total
      if (chartSwitch !== null) {
        const elemt = getIdNumber();
        for (const key in responseData[elemt]) {
          chartData.push({
            name: key,
            count: responseData[elemt][key].count,
          });
        }
      } else {
        // push object into chart data or increment chart data obj
        for (const elemt in responseData) {
          let index = 0;
          for (const key in responseData[elemt]) {
            if (chartData.some((data) => data.name === key)) {
              chartData[index].count += responseData[elemt][key].count;
            } else {
              chartData.push({
                name: key,
                count: responseData[elemt][key].count,
              });
            }
            index++;
          }
        }
      }
      setChartData(chartData);
    };
    fetchData();
  }, []);

  // onClick of weekly chart category
  const handleClick = (evt, element) => {
    if (chartSwitch !== null) {
      const index = element[0].index;
      let tempData = [...chartData];
      chartSwitch ? tempData[index].count++ : tempData[index].count--;
      setChartData(tempData);
      chartRef.current.update();
      updateFirebaseDatabase(tempData, index);
    }
  };

  // write to db
  const updateFirebaseDatabase = (tempData, index) => {
    database
      .ref(`WeeklyChartData/${getIdNumber()}/${tempData[index].name}`)
      .set({
        count: tempData[index].count,
      })
      .catch(alert);
  };

  const options = {
    indexAxis: axis,
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: timeWindow,
      },
      legend: {
        display: false,
      },
    },
    onClick: handleClick,
  };

  const data = {
    labels: chartData.map((data) => data.name),
    datasets: [
      {
        data: chartData.map((data) => data.count),
        backgroundColor: colors,
        borderColor: borders,
      },
    ],
  };

  return <Bar ref={chartRef} data={data} options={options} />;
};

export default Chart;
