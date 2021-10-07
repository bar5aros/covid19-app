import React from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 300px;
`;

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
        text: "Chart.js Horizontal Bar Chart",
      },
    },
  };
  return (
    <Container>
      <Bar data={data} options={options} height={300} width={300} />
    </Container>
  );
};

export default HorizontalBar;
