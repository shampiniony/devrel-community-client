import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Navbar } from './modules';

const router = createBrowserRouter([
  {
    path: '/dashboard/:section?',
    element: <Dashboard/>,
  },
]);

export default function App() {
  return (
    <>
      <Navbar/>
      <main className='pt-16'>
        <RouterProvider router={router} />
      </main>
    </>
  )
}

{/* <Navbar/>
      <Layout>hell</Layout> */}