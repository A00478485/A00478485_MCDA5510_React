import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/about" replace />,
  },
  {
    path: "/about",
    element: <App />
    //element: <ListPage type='provinces' />,
  },
  {
    path: "/mytown",
    element: <App />
    //element: <ListPage type='territories'/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
