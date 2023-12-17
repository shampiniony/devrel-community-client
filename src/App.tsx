import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { FormPage } from './pages/forms/form';
import { Dashboard } from './pages/dashboard/Dashboard';
import { WelcomePage } from './pages/index/WelcomePage';
import { Error404 } from './pages/errors/Error404';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomePage></WelcomePage>,
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
      <RouterProvider router={router} />
      <Toaster
        toastOptions={{
          className: 'bg-second-primary text-white',
        }}
      />
    </div>
  );
}
