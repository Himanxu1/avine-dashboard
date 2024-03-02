import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import Profile from './Pages/Profile';
import Plan from './Pages/Bankaccount';
import Integration from './Pages/Integration';
import Documents from './Pages/Documents';
import Taxreturn from './Pages/Integration';
import BankAccount from './Pages/Bankaccount';
import Login from './Pages/Login';
import { UserProvider } from './UserContext';


const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <Login/>,
   
  },
  {
    path:"/app",
    element:<App/>
  },
  {
    path:'/dashboard',
    element:<Dashboard/>,
    children:[
      {
        path:'/dashboard/profile',
        element:<Profile/>
      },
      {
        path:'/dashboard/bankaccount',
        element:<BankAccount/>
      },
      {
        path:'/dashboard/taxreturn',
        element:<Taxreturn/>
      },
      {
        path:'/dashboard/documents',
        element:<Documents/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
    <RouterProvider router={appRouter}/>
    </UserProvider>
  </React.StrictMode>
);

