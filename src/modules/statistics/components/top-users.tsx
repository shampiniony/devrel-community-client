import { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface IUser {
  id: number;
  first_name: string;
  amount: number;
}

const url = 'http://87.236.22.85/api/users/'

  const data = [
    { name: 'Category A', value: 10 },
    { name: 'Category B', value: 15 },
    { name: 'Category C', value: 8 },
    { name: 'Category D', value: 20 },
  ];

const users: IUser[] = [
  {
    id: 1,
    first_name: 'Angela',
    amount: 10,
  },
  {
    id: 2,
    first_name: 'Malter',
    amount: 13,
  },
  {
    id: 3,
    first_name: 'Anton',
    amount: 20,
  }
]
const chartData = users.map(user => ({
  name: user.first_name,
  value: user.amount,
}));
export const TopUsers = () => {
  // const [users, setUsers] = useState<IUser[]>([]);
  const chartData = users.map(user => ({
    name: user.first_name,
    value: user.amount,
  }));

  useEffect(() => {
    const fetchTopUsers = async () => {
      try {
        const response = await axios.get(url);
        const data: IUser[] = response.data;
        // setUsers(data);
      } catch (error) {
        console.error('Error fetching top users:', error);
      }
    };
  
    fetchTopUsers();
  }, []);
  

  return (
    <div>
      <h2 className='text-lg pb-4'>Top Users</h2>
      <ResponsiveContainer className='' width='100%' height={200}>
        <BarChart data={chartData}>
          <CartesianGrid stroke="transparent" />
          <YAxis />
          <XAxis dataKey="name" />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
