// // ChartComponent.js
// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'; // Import necessary components

// // Register chart components with ChartJS
// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// const ChartComponent = ({ chartData }) => {
//   if (!chartData) return null; // Return null if there's no data to display
//     console.log('====================================');
//     console.log(chartData);
//     console.log('====================================');
//   return (
//     <div className="chart-container">
//       <h2>Reviews Chart</h2>
//       <Bar data={chartData} options={{ responsive: true }} />
//     </div>
//   );
// };

// export default ChartComponent;

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'; // Import necessary components

// Register chart components with ChartJS
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const ChartComponent = ({ chartData }) => {
  if (!chartData) return null; // Return null if there's no data to display
    console.log('====================================');
    console.log(chartData);
    console.log('====================================');
  
  const chartOptions = {
    responsive: true, // Ensures the chart is responsive to screen size
    maintainAspectRatio: false, // Disable aspect ratio to allow custom size
    plugins: {
      title: {
        display: true,
        text: "Reviews Chart",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        beginAtZero: true, // Makes sure the x-axis starts at 0
      },
    },
  };

  return (
    <div className="chart-container" style={{ height: '300px', width: '300px' }}> {/* Custom height and width */}
      <h2>Reviews Chart</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default ChartComponent;

