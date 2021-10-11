import React from "react";
import { Doughnut as DoughnutChart } from "react-chartjs-2";

const data = {
  labels: ["Confirmed", "Recovered", "Deaths"],
  datasets: [
    {
      label: "Count",
      data: [15553, 657, 134],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        //   'rgba(75, 192, 192, 0.2)',
        //   'rgba(153, 102, 255, 0.2)',
        //   'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Doughnut = () => <DoughnutChart data={data} height={300} width={300} />;

export default Doughnut;
