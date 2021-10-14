import React from "react";
import { Bar } from "react-chartjs-2";

const HorizontalBar = (props) => {
  const data = {
    labels: ["Confirmed", "Recovered", "Deaths", "Critical"],
    datasets: [
      {
        label: "Cases",
        data: props.data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
      },
    ],
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
        text: "Total Covid Data",
      },
    },
  };
  return <Bar data={data} options={options} height={300} width={300} />;
};

export default HorizontalBar;
