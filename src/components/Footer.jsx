import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"



const Footer = () => {
  return (
    <div style={{width: "100%", marginTop: "100px", position: "absolute", bottom: "0"}}>
        <div className="footer">
            <div className="topFooter">
                <div className="logoContainer">
                    <div style={{paddingLeft: "5px", display: "flex", justifyContent: "center", alignItems: 'center'}}>
                        <img className='logoIcon' src={logo} />
                    </div>
                    <p style={{padding: "0 15px", fontSize: 24, fontWeight: 1000, color: "blue"}}>Tiken Techonology</p>
                </div>
                <div className="navFooter">
                    <Link to="/">
                        Home
                    </Link>
                    <p> | </p>
                    <Link to="/">
                        Distributorship
                    </Link>
                    <p> | </p>
                    <Link to="/">
                        Contact Us
                    </Link>
                </div>
            </div>
            <div className="bottomFooter">
                <p>2023 ©Tiken Technology | Marketed by Peanut Concept</p>
            </div>
        </div>
    </div>
  )
}

export default Footer