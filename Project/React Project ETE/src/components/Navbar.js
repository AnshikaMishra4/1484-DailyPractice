import React, {useState} from 'react'
import flex_logo from "../WebsiteMaterial/images/flex_logo.jpg"
import { Link } from 'react-router-dom'

export default function Navbar() {
	const [isLoggedin, setIsLoggedin] = useState(localStorage.getItem('token'))
	const handleLogout = ()=>{
		setIsLoggedin('');
		localStorage.removeItem('token');
	}
  return (
    <nav id="nav" className="navbar navbar-expand-lg navbar-light">
	  <div className="container-fluid" >
	    <img src={flex_logo} id="North_logo" alt="..." />
	    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
	      <span className="navbar-toggler-icon"></span>
	    </button>
	    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
	      <div className="navbar-nav">
	        <Link className="nav_link" to="/">HOME</Link>
	        <Link className="nav_link" to="/about">ABOUT US</Link>
	        
	        {/* <Link className="nav_link" to="/contactus">SUPPORT</Link> */}
	        <Link className="nav_link" to="/contactus">CONTACT US</Link>
			{/* <Link to="/contactus">About2</Link> */}
	        {isLoggedin?<Link onClick={handleLogout} className="nav_link" to="#">LOGOUT</Link>:<Link className="nav_link" to="/login">LOGIN</Link>}
	      </div>
	    </div>
	  </div>
	</nav>
  )
}
