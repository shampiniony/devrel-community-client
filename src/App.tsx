import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Navbar } from './modules';
import { Error404 } from './pages/Error404';

const router = createBrowserRouter([
  {
    path: '/dashboard/:section?/:subsection?',
    element: <Dashboard/>,
    errorElement: <Error404/>,
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