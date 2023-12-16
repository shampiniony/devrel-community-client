import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Dashboard } from './pages/dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: '/dashboard/:section?',
    element: <Dashboard></Dashboard>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
