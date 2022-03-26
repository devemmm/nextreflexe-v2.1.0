import React from 'react'

const MainFooter = ()=>{
  return (
    <>
    <div className="widgets-section" style= {{backgroundImage: require('./7.jpg')}}>
            <div className="auto-container">
                <div className="row">
                    <div className="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="footer-column col-xl-7 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget about-widget">
                                    <div className="logo">
                                        <a href="/"><img src="images/logo.png" alt="" /></a>
                                    </div>
                                    <div className="text">
                                        <p>Our Clinic has grown to provide a world className facility for the clinic advanced restorative. </p>
                                        <p>We are among the most qualified implant providers in the Rwanda, Central Africa and Zibwabwe with over 4 years of quality training and experience.</p>
                                    </div>
                                    <ul className="social-icon-three">
                                        <li><a href="https://www.instagram.com/nextreflexe/"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://www.instagram.com/nextreflexe/"><i className="fab fa-pinterest"></i></a></li>
                                        <li><a href="https://www.instagram.com/nextreflexe/"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="https://www.instagram.com/nextreflexe/"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="https://www.instagram.com/nextreflexe"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="footer-column col-xl-5 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <h2 className="widget-title">Services</h2>
                                    <ul className="user-links">
                                        <li><a href="#">Reflexology</a></li>
                                        <li><a href="#">Reflexoterapy</a></li>
                                        <li><a href="#">Massage</a></li>
                                        <li><a href="#">Kunga</a></li>
                                        <li><a href="#">Etc ...</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget recent-posts">
                                    <h2 className="widget-title">Latest News</h2>
                                    <div className="widget-content">
                                        <div className="post">
                                            <div className="thumb"><a href="blog-post-image.html"><img src="images/resource/post-thumb-1.jpg" alt=""/></a></div>
                                            <h4><a href="blog-post-image.html">Integrative Massage & <br/>& Kunga Services.</a></h4>
                                            <span className="date">July 11, 2020</span>
                                        </div>

                                        <div className="post">
                                            <div className="thumb"><a href="blog-post-image.html"><img src="images/resource/post-thumb-2.jpg" alt=""/></a></div>
                                            <h4><a href="blog-post-image.html">Achieving Better <br/>Health Care Time.</a></h4>
                                            <span className="date">August 1, 2020</span>
                                        </div>

                                        <div className="post">
                                            <div className="thumb"><a href="blog-post-image.html"><img src="images/resource/post-thumb-3.jpg" alt=""/></a></div>
                                            <h4><a href="blog-post-image.html">Great Health Care <br/>For Patients.</a></h4>
                                            <span className="date">August 1, 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget contact-widget">
                                    <h2 className="widget-title">Contact Us</h2>
                                    <div className="widget-content">
                                        <ul className="contact-list">
                                            <li>
                                                <span className="icon flaticon-placeholder"></span>
                                                <div className="text">KG 228<sup>st</sup> Kimironko, Kigali <br/>CA 94117-1080 Central Africa</div>
                                            </li>

                                            <li>
                                                <span className="icon flaticon-call-1"></span>
                                                <div className="text">Sun - Frid 8.00 - 21.00</div>
                                                <a href="tel:+250788596281"><strong>+250 788 409 264</strong></a>
                                                <a href="tel:+263788306780"><strong>+250 788 596 281</strong></a>
                                            </li>

                                            <li>
                                                <span className="icon flaticon-email"></span>
                                                <div className="text">Do you have a Question?<br/>
                                                <a href="mailto:admin@nextreflexe.com"><strong>admin@nextreflexe.com</strong></a></div>
                                            </li>

                                            <li>
                                                <span className="icon flaticon-back-in-time"></span>
                                                <div className="text">Sun - Frid 8.00 - 17.00<br/>
                                                <strong>Saturday CLOSED</strong></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MainFooter