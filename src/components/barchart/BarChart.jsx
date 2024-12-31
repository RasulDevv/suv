import "./BarChart.css";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarChart = ({ values }) => {
  return (
    <div className='bar-chart'>
      <LineChart width={window.innerWidth} height={400} data={values}>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="ph" stroke="red" name="PH" />
        <Line type="monotone" dataKey="turbidity" stroke="blue" name="LOYQALIK" />
      </LineChart>
    </div>
  );
};

export default BarChart;
