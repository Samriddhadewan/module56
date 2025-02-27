import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import Home from './Components/Home.jsx';
import SignUp from './Components/signUp.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Users from './Components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children:[
      {
        path: "/",
        element: <App />,
        loader: ()=> fetch("https://coffee-store-server-ruby-ten.vercel.app/coffees"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee ></AddCoffee>
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee ></UpdateCoffee>,
        loader: ({params}) => fetch(`https://coffee-store-server-ruby-ten.vercel.app/coffees/${params.id}`)
      },
      {
        path: "/signUp",
        element: <SignUp ></SignUp>
      },
      {
        path: "/register",
        element: <Register ></Register>
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: ()=> fetch("https://coffee-store-server-ruby-ten.vercel.app/users")
      },
    ]
  },
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
