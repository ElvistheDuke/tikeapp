import React from 'react'
import tiken from '../assets/whitetiken.jpg'
import { Link } from 'react-router-dom'



const homepage = () => {
  return (
    <div className='homeContainer'>
        <div className="heroSection">
            <div className="leftHero">
                <p style={{fontSize: 60, lineHeight: 1, fontWeight: 800, color: "blue"}}>60 AMP</p>
                <p style={{fontSize: 50, lineHeight: 1, fontWeight: 1000, color: "blue"}}>AUTOMATIC <br></br>CHANGE OVER</p>
                <p style={{fontSize: 24, lineHeight: 2, fontWeight: 800, color: "aqua"}}>Plus Auto Gen Shut Down</p>
                <p style={{fontSize: 18, lineHeight: 2, fontWeight: 400, color: "black"}}>A Quality Product of Tiken Manufacturing Company</p>
            </div>
            <div className="rightHero">
                <img className='tikenImage' src={tiken} />
            </div>
        </div>
        <div className="aboutSection">
            <div className="leftAbout">
                <iframe style={{width: "400px", height: "300px"}} src="https://youtu.be/0vsMZoKUZus" frameborder="0"></iframe>
            </div>
            <div className="rightAbout">
                <p style={{fontSize: 40, lineHeight: 1, fontWeight: 1000, color: "blue"}}>About Us</p>
                <p style={{margin: "20px 0px"}}>
                    Tiken Technology is an indigenous electronics manufacturing company located in Lagos, Nigeria.
                    Our burning desire is solving human challenges by providing comfort through advanced contemporary technology in the continent of Africa.
                </p>
            </div>
        </div>
        <div className="calltoaction">
            <p style={{fontSize: 40, lineHeight: 1, fontWeight: 1000, color: "blue"}}>Become Our Distributor</p>
            <p style={{margin: "40px 0px"}}>Tiken represents a significant leap forward in power management technology, offering a convenient and reliable solution for managing power supply transitions during grid outages and fluctuations. With its automated operation, energy efficiency, and cost-saving potential, Tiken is poised to revolutionize the way we experience and manage electricity.<br></br> Partner with us and be one of our distributors today.</p>
            <Link to="/distributor">
                <div className='blueButton'>
                    <p>Distibutorship Registration</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default homepage