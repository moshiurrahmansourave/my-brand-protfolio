import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: '/banner',
        element:<Banner></Banner>
      },
      {
        path: '/about',
        element:<About></About>
      },
      {
        path: '/service',
        element:<Services></Services>
      },
      {
        path: '/work',
        element:<Work></Work>
      },
      {
        path: '/contact',
        element:<Contact></Contact>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
