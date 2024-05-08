import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from 'modules/dashboard/pages/Dashboard';
import { ChakraProvider } from '@chakra-ui/react';
import Login from 'modules/authentication/pages/Login';
import RecordEntry from 'modules/record-entry/pages/RecordEntry';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/new-record',
    element: <RecordEntry />,
  },
]);

// eslint-disable-next-line no-undef
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
);
