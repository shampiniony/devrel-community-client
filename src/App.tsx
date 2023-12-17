// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { FormPage } from './pages/forms/form';
// import { Dashboard } from './pages/dashboard/Dashboard';
import { Navbar } from './modules';
import { Error404 } from './pages/errors/Error404';
import { Example } from './example';
import { Statistics } from './modules/statistics/statistics';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <></>,
//     errorElement: <Error404 />,
//   },
//   {
//     path: '/forms/:form_id',
//     element: <FormPage></FormPage>,
//     errorElement: <Error404 />,
//   },
//   {
//     path: '/dashboard/:section?/:subsection?',
//     element: <Dashboard />,
//     errorElement: <Error404 />,
//   },
// ]);

const chartData = [
  { name: 'Jan', uv: 4000, pv: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398 },
  { name: 'Mar', uv: 2000, pv: 9800 },
];

export default function App() {
  return (
    <div>
      <Navbar />
      <div className='max-w-[1280px] mx-auto'>
        {/* <Statistics/> */}
        <FormPage/>
      </div>
      <main>
        {/* <RouterProvider router={router} /> */}
      </main>
    </div>
  );
}
