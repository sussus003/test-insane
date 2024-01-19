import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Map from './components/Map';
import Table from './components/Table';
import Error404 from './components/Error404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: 'login',
    element: <Login/>
  },
  {
    path: 'map',
    element: <Map/>
  },
  {
    path: 'table',
    element: <Table/>
  },
  {
    path:"dashboard",
    element: <Dashboard/>
  },
  {
    path:'contactadmin',
    element: <contactAdmin/>
  },
  {
    path: '*',
    element: <Error404/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in you r app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
