import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Login from './component/login';
import Map from './component/Map';
import Table from './component/table';

const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <Dashboard/>
  },
  {
    path: 'login',
    element: <Login/>
  },
  {
    path: '/map',
    element: <Map/>
  },
  {
    path: '/table',
    element: <Table/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
