import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/profile',
    element: <>Profile</>,
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
