import React from 'react'

const HeaderSearch = ()=>{
  return (
    <div className="search-popup">
        <span className="search-back-drop"></span>
        <button className="close-search"><span className="fa fa-times"></span></button>
        
        <div className="search-inner">
            <form method="post" action="blog-showcase.html">
                <div className="form-group">
                    <input type="search" name="search-field" value="" placeholder="Search..." required=""/>
                    <button type="submit"><i className="flaticon-magnifying-glass"></i></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default HeaderSearch