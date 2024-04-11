import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Aider from './Pages/Aider/Aider';
import Lister from './Pages/Lister/Lister';
import Lister2 from './Pages/Lister2/Lister2';
import Log from './Pages/Log/Log';
import Voir from './Pages/Voir/voir'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "Aider",
    element: <Aider/>
  },
  {
    path: "Lister",
    element: <Lister/>
  }
  ,
  {
    path: "Lister2",
    element: <Lister2/>
  }
  ,
  {
    path: "Log",
    element: <Log/>
  }
  ,
  {
    path: "Voir",
    element: <Voir/>
    

  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);


