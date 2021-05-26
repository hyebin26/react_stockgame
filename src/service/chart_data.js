export const stock = {
  labels: ["1day", "2day", "3day", "4day", "5day", "6day", "7day", "8day"],
  datasets: [
    {
      label: "H전자",
      data: [15000],
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
//클릭 시 라벨 변경
// data는 ?
