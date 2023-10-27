import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './routes/homepage';
import { Outlet, } from "react-router-dom";
import NavBar from './components/NavBar';
import Distributorpage from './routes/distributorpage';
import Contactuspage from './routes/contactuspage';
import Footer from './components/Footer';
import Adminpage from './routes/adminpage';
import Applicantspage from './routes/applicantspage';



const Root = () => {
  return (
      <>
      <div className='rootContainer'>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
          
      </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/distributor",
        element: <Distributorpage />,
      },
      {
        path: "/contactus",
        element: <Contactuspage />,
      },
    ]
  },
  {
    path: "/admin",
    element: <Adminpage />,
    // children: [
    //   {
    //     path: "/applicants",
    //     element: <Applicantspage />
    //   },
    // ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
