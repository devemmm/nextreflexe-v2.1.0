import React from 'react'

const Headertop = ()=>{
  return (
    <>
        <div className="header-top">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="top-left">
                        <ul className="contact-list clearfix">
                            <li><i className="flaticon-hospital-1"></i>KG 228 <sp>st</sp> Kimironko, Gasabo, Rwanda </li>
                            <li><i className="flaticon-back-in-time"></i>Sun - Frid 8.00 - 17.00. Saturday CLOSED</li>
                        </ul>
                    </div>
                    <div className="top-right">
                        <ul className="social-icon-one">
                            <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                            <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                            <li><a href="#"><span className="fab fa-skype"></span></a></li>
                            <li><a href="#"><span className="fab fa-linkedin-in"></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Headertop