import React from 'react'
import AdminNav from '../components/AdminNav'
import { Outlet } from 'react-router-dom'

const adminpage = () => {
  return (
    <>
        <div className='rootContainer'>
            <AdminNav />
            <Outlet />
        </div>
    </>
  )
}

export default adminpage