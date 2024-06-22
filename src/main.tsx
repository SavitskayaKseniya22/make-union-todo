import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Users from './lib/Users.tsx';
import User from './lib/User.tsx';
import HeaderLayout from './lib/Header.tsx';
import ToDo from './lib/to-do/ToDo.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/',
        element: <Users />,
      },
      {
        path: 'user/:userId',
        element: <User />,
      },
      {
        path: '/to-do',
        element: <ToDo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
