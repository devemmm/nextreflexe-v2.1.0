import React from 'react'

const FooterBottom = ()=>{
  return (
    <>
        <div className="footer-bottom">
            <div className="scroll-to-top scroll-to-target" data-target="html"><span className="fa fa-angle-up"></span></div>
            
            <div className="auto-container">
                <div className="inner-container clearfix">
                    <div className="footer-nav">
                        <ul className="clearfix">
                           <li><a href="/terms-and-condition">Privacy Policy</a></li> 
                           <li><a href="/contact-us">Contact</a></li> 
                           <li><a href="/services">Services</a></li>  
                        </ul>
                    </div>
                    
                    <div className="copyright-text">
                        <p>Copyright © 2020 <a href="#">Emmanuel NT.</a> All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FooterBottom