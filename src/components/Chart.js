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
import { chartData } from "../data/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ axis }) => {
  const handleClick = (evt, element) => {
    console.log(evt, evt.type);
    console.log(element[0].index);
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
        text: "Progression Tracker",
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
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
      },
    ],
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;
