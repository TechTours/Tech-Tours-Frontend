import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

const CustomLegend = {
  ...Legend,
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  CustomLegend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        useBorderRadius: true,
        borderRadius: 6,
        boxWidth: 30,
      },
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Sightings',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      borderColor: '#00000',
      backgroundColor: '#00000',
      tension: 0.5,
      pointRadius: 1,
    },
    {
      label: 'Animals ',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      borderColor: '#22543D',
      backgroundColor: '#22543D',
      tension: 0.5,
      pointRadius: 1,
    }
  ],
};

export default function Chart() {
  return (
    <div className='w-[96%] h-[60vh] flex flex-col justify-center items-center'>
        <h2 className='text-xl font-bold'>Animals and Sightings Comparison </h2>
        <Line options={options as any} data={data} />;
    </div>
  )
}