import React from "react";
import { Bar } from "react-chartjs-2";
import { useState, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { chartData } from "../data/data";
import { getTimeWindow } from "../helpers/helper";
import { colors, borders } from "../helpers/constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ axis }) => {
  const chartRef = useRef();
  const [localChartData, setLocalChartData] = useState(
    chartData.map((data) => data.count)
  );
  const timeWindow = getTimeWindow();

  const handleClick = (evt, element) => {
    const index = element[0].index;
    localChartData[index]++;
    setLocalChartData(localChartData);
    chartRef.current.update();
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
        text: `Progression Tracker: ${timeWindow[0]} - ${timeWindow[1]}`,
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
        data: localChartData,
        backgroundColor: colors,
        borderColor: borders,
      },
    ],
  };

  return <Bar ref={chartRef} data={data} options={options} />;
};

export default Chart;
