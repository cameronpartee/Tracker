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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ axis, chartType, chartSwitch, timeWindow }) => {
  const chartRef = useRef();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://progressiontracker-7ea67-default-rtdb.firebaseio.com/${chartType}.json`
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();
      console.log(responseData);
      const chartData = [];

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

      setChartData(chartData);
    };
    fetchData();
  }, [chartType]);

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

  const updateFirebaseDatabase = (tempData, index) => {
    database
      .ref(`${chartType}/${tempData[index].name}`)
      .set({
        count: tempData[index].count,
      })
      .catch(alert);
  };

  // This function gets called four times right now - lets at least cut the renders down to 2..s
  const incrementAnnualByWeekly = () => {
    if (chartSwitch !== null) {
      let tempCount = 0;
      for (const key in chartData) {
        database
          .ref(`AnnualChartData/${chartData[key].name}`)
          .on("value", (snapshot) => {
            tempCount = snapshot.val().count;
          });
        database
          .ref(`AnnualChartData/${chartData[key].name}`)
          .set({
            count: tempCount + chartData[key].count,
          })
          .catch(alert);
      }
    }
  };
  //incrementAnnualByWeekly();

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
