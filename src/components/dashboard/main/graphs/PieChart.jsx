import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { data } from './SharedData';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  return <Pie data={data} />;
};

export default PieChart;
