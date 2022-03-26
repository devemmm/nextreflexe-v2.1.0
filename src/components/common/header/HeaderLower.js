import React from 'react'

const HeaderLower = ()=>{
  return (
    <>
       <div className="header-lower">
            <div className="auto-container">    
                <div className="main-box">
                    <div className="logo-box">
                        <div className="logo"><a href="/"><img src="images/icons/logo.png" alt="" title=""/></a></div>
                    </div>

                    <div className="nav-outer">
                        <nav className="nav main-menu">
                            <ul className="navigation" id="navbar">
                                <li className="current dropdown">
                                    <span>Home</span>
                                    <ul>
                                        <li className="current"><a href="/">Home | Reflexology</a></li>
                                        <li><a href="/">Home | Massage</a></li>
                                        <li><a href="/">Home | Reflexoterapy</a></li>
                                        <li><a href="/">Home | Kunga</a></li>
                                    </ul>
                                </li>
                                <li><a href="/about-us">About Us</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/services">Gallery</a></li>
                                <li className="dropdown">
                                    <span>Doctors</span>
                                    <ul>
                                        <li><a href="/doctors">Doctors</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <span>Pages</span>
                                    <ul>
                                        
                                        <li><a href="/coming-soon">Coming Soon</a></li>
                                    </ul>
                                </li>
    
                                <li><a href="/contact-us">Contact</a></li>
                                <li><a href="/signin">Signin</a></li>
                            </ul>
                        </nav>

                        <div className="outer-box">
                             <a href="/appointment" id="appointment-btn" className="theme-btn btn-style-one"><span className="btn-title">Appointment</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeaderLower