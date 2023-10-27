import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminNav = () => {

    const navLinks = [
        {
            tag: "Home",
            link: "/",
            code: "home"
        },
        {
            tag: "Distributorship",
            link: "/distributor",
            code: "distributor"
        },
        {
            tag: "Contact Us",
            link: "/contactus",
            code: 'contact'
        },
    ]

  return (
    <div className='navContainer'>
        <div className='adminNavContainer'>
            <div className="adminNav">
                <ul>
                {
                        navLinks.map((nav, index) => {
                            return(
                                <NavLink key={index}
                                to={nav.link}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "selectedLink" : "notSelectedLink"
                                }
                                >
                                <p>{nav.tag}</p>
                                </NavLink>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
        <div className="adminHeader">
            <h1>Tiken Admin</h1>
            <div style={{position: 'absolute', left: "0", marginLeft: "10px"}} className='iconContainer adminNavMenu'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>
            </div>
        </div>
    </div>
  )
}

export default AdminNav