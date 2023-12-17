import React from 'react'
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Category A', value: 10 },
  { name: 'Category B', value: 15 },
  { name: 'Category C', value: 20 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28']; 

export const CustomPie = () => {
  return (
    <div>
      <h3 className='text-lg'>Header</h3>
      <ResponsiveContainer width="50%" height={200}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={40}
            innerRadius={30}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
