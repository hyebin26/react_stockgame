import "chart.piecelabel.js";

export const data = {
  labels: [],
  datasets: [
    {
      data: [],
      backgroundColor: [
        "#A4262C",
        "#CA5010",
        "#8F7034",
        "#407855",
        "#038387",
        "#0078D4",
        "#40587C",
        "#4052AB",
        "#854085",
        "#737373",
        "#867365",
        "#876488",
      ],
    },
  ],
};
export const options = {
  aspectRatio: 1,
  maintainAspectRatio: false,
  datasets: {
    doughnut: {
      borderColor: "rgb(242 242 242 / 68%)",
    },
  },
  events: [],
  plugins: {
    legend: {
      position: "left",
      title: {
        display: true,
        text: "보유 주식",
        color: "white",
      },
      labels: {
        padding: 20,
        color: "white",
        usePointStyle: true,
      },
    },
  },
};
