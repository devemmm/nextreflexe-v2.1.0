import React from 'react'

const MobileHeader = ()=>{
  return (
    <>
        <div className="mobile-header">
            <div className="logo"><a href="index.html"><img src="images/logo.png" alt="" title=""/></a></div>

            <div className="nav-outer clearfix">

                <div className="outer-box">
                    <div className="search-box">
                        <button className="search-btn mobile-search-btn"><i className="flaticon-magnifying-glass"></i></button>
                    </div>

                    <a href="#nav-mobile" className="mobile-nav-toggler navbar-trigger"><span className="fa fa-bars"></span></a>
                </div>
            </div>
        </div>
    </>
  )
}

export default MobileHeader