import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["1day", "2day", "3day", "4day", "5day", "6day", "7day", "8day"],
  datasets: [
    {
      label: "H전자",
      data: [6500, 5900, 8000, 8100, 5000, 3000],
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgb(75, 192, 192)",
      tension: 0,
    },
  ],
};
const options = {
  plugins: {
    legend: {
      onClick: () => {
        return false;
      },
    },
  },
  elements: {
    point: {
      hoverBorderWidth: 10,
      borderWidth: 3,
      hoverRadius: 7,
    },
  },
};
// cursor : pointer / transition : 속도 더 빠르게

const ChartJs = (props) => {
  const [data, setData] = useState({
    labels: ["1day", "2day", "3day", "4day", "5day", "6day", "7day", "8day"],
    datasets: [
      {
        label: "H전자",
        data: [6500, 5900, 8000, 8100, 5000, 3000],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgb(75, 192, 192)",
        tension: 0,
      },
    ],
  });
  const handleAddBtn = () => {
    setData((state) => ({
      ...state,
      datasets: [
        {
          ...state.datasets[0],
          data: state.datasets[0].data.concat(8000),
        },
      ],
    }));
  };
  console.log(data);
  useEffect(() => {
    return <Line width={100} height={100} data={data} options={options} />;
  });
  return (
    <div>
      <h2>Chart JS</h2>
      <Line width={100} height={100} data={data} options={options} />
      <button onClick={handleAddBtn}>Add</button>
    </div>
  );
};

export default ChartJs;
