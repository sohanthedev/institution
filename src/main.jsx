import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/layout/Home.jsx';
import App from './App.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <App></App>
  </React.StrictMode>,
)
