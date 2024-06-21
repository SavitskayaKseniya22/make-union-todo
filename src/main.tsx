import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Users from './lib/Users.tsx';
import User from './lib/User.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Users />,
  },
  {
    path: 'user/:userId',
    element: <User />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
