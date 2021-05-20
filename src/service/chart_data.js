export const stock = {
  labels: ["1day", "2day", "3day", "4day", "5day", "6day", "7day", "8day"],
  datasets: [
    {
      label: "H전자",
      data: [15000, 17000, 20000, 21000, 15000],
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgb(75, 192, 192)",
      tension: 0,
    },
  ],
};
export const options = {
  plugins: {
    legend: {
      onClick: () => {
        return false;
      },
    },
  },
  maintainAspectRatio: false,
  elements: {
    point: {
      hoverBorderWidth: 10,
      borderWidth: 3,
      hoverRadius: 7,
    },
  },
};
// cursor : pointer / transition : 속도 더 빠르게
