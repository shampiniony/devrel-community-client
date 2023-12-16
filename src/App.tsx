import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { FormPage } from './pages/forms/form';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Navbar } from './modules';
import { Error404 } from './pages/errors/Error404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <></>,
    errorElement: <Error404 />,
  },
  {
    path: '/forms/:form_id',
    element: <FormPage></FormPage>,
    errorElement: <Error404 />,
  },
  {
    path: '/dashboard/:section?/:subsection?',
    element: <Dashboard />,
    errorElement: <Error404 />,
  },
]);

export default function App() {
  return (
    <div>
      <Navbar />
      <main className='pt-16'>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}
