
import React from 'react'
import "./NavbarComponent.css"
import { Link } from 'react-router-dom';
import logo from "../../../Assets/logo.png"


function NavbarComponent() {
    return (

        <div id= "sidelinks">
      <img src={logo} alt='logo'></img>

    <div >
    <ul>
      <li><Link to="/about" className="nav-link">About</Link></li>
      <li><Link to="/services" className="nav-link">Services</Link></li>
      <li><Link to="/gallery" className="nav-link">Gallery</Link></li>
      <li><Link to="/blog" className="nav-link">Blog</Link></li>
      <li><Link to="/contact" className="nav-link">Contact</Link></li>
    </ul>
    </div>


        </div>

    )
}

export default NavbarComponent;