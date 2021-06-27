import "chart.piecelabel.js";

export const data = {
  labels: [],
  datasets: [
    {
    data: [],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
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
