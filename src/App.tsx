import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { FormPage } from './pages/FormPage';

const router = createBrowserRouter([
  {
    path: '/forms/:id',
    element: <FormPage></FormPage>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
