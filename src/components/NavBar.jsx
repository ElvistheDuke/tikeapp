import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png"
import { Link, NavLink } from 'react-router-dom'
import {Bars3Icon} from "@heroicons/react/24/outline"


const checkname = (link) => {
    if(window.location.pathname.includes(link)){
        return true
    }else if(link == 'home'){
        if(window.location.pathname == "/"){
            return true
        }
    }else{
        return false
    }
    
}

const NavBar = () => {
    const [isClicked, setClicked] = useState(true)

    const mobileScreen = window.innerWidth < 600
    // console.log(mobileScreen)
    useEffect(() => {
        if(mobileScreen){
            setClicked(false)
        }
    },[])

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


    const[linkStyle, setLinkStyle] = useState('')
    // (checkname(nav.code) ? "selectedLink" : "notSelectedLink")

  return (
    <div className='navBarContainer'>
        <div className='navBar'>
            <div style={{paddingLeft: "5px", display: "flex", justifyContent: "space-between"}}>
                <img className='logoIcon' src={logo} />
                
                <div onClick={() => {
                    setClicked(!isClicked)
                }} className='iconContainer navMenu'>
                    {
                        !isClicked ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    }

                </div>
            </div>
            
            <div style={{display: isClicked ? "flex" : "none"}} className='navLinksContainer'>
                <ul className='navLinks'>
                    {
                        navLinks.map((nav, index) => {
                            return(
                                // <Link className="selectedLink" key={index} to={nav.link}>
                                //     <p>{nav.tag}</p>
                                // </Link>
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
        
        
    </div>
  )
}

export default NavBar