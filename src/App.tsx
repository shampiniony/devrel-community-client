import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { FormPage } from './pages/forms/form';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Navbar } from './modules/header/components/navbar';

const router = createBrowserRouter([
  {
    path: '/forms/:form_id',
    element: <FormPage></FormPage>,
  },
  {
    path: '/dashboard/:section?/:subsection?',
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
