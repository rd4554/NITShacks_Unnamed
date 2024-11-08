// ChartComponent.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartComponent = ({className}) => {
  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4'],
    datasets: [
      {
        label: 'Tasks Done',
        data: [3, 1, 5, 4], // Sample data
        backgroundColor: 'rgba(144, 238, 144, 0.7)', // Light green color for bars
        borderColor: 'rgba(0, 0, 0, 0.7)', // Dark border for bars
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Days',
          color: '#fff',
        },
        ticks: {
          color: '#fff',
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Tasks Done',
          color: '#fff',
        },
        ticks: {
          color: '#fff',
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className={`p-8 bg-green-800 rounded-lg shadow-lg ${className}`}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
