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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const handleClick = (evt, element) => {
    console.log(element[0].index);
  };

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Progression Tracker",
      },
    },
    onClick: handleClick,
  };

  const data = {
    labels: [
      "Technical",
      "Sys Design",
      "Frontend",
      "Stretching",
      "Dancing",
      "Airbnb",
    ],
    datasets: [
      {
        label: "frequency count",
        data: [12, 1, 3, 2, 3, 2],
        backgroundColor: "red",
      },
    ],
  };

  return (
    <div style={{ width: "700px", height: "500px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;
