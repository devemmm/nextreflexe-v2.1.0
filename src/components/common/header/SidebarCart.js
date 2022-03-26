import React from 'react'

const SidebarCart = ()=>{
  return (
    <div className="sidebar-cart">
            <span className="cart-back-drop"></span>
            <div className="shopping-cart">
                <div className="cart-header">
                    <div className="title">Shopping Cart <span>(3)</span></div>
                    <button className="close-cart"><span className="flaticon-add"></span></button>
                </div>
                <ul className="shopping-cart-items">
                    <li className="cart-item">
                        <img src="images/resource/products/product-thumb-1.jpg" alt="#" className="thumb" />
                        <span className="item-name">First Aid Kit</span>
                        <span className="item-quantity">1 x <span className="item-amount">$50.00</span></span>
                        <a href="shop-single.html" className="product-detail"></a>
                        <button className="remove">Remove</button>
                    </li>

                    <li className="cart-item">
                        <img src="images/resource/products/product-thumb-2.jpg" alt="#" className="thumb"  />
                        <span className="item-name">Vitamin Tablet</span>
                        <span className="item-quantity">1 x <span className="item-amount">$25.00</span></span>
                        <a href="shop-single.html" className="product-detail"></a>
                        <button className="remove">Remove</button>
                    </li>

                    <li className="cart-item">
                        <img src="images/resource/products/product-thumb-3.jpg" alt="#" className="thumb"  />
                        <span className="item-name">Zinc Tablet</span>
                        <span className="item-quantity">1 x <span className="item-amount">$15.00</span></span>
                        <a href="shop-single.html" className="product-detail"></a>
                        <button className="remove">Remove</button>
                    </li>
                </ul>

                <div className="cart-footer">
                    <div className="shopping-cart-total"><strong>Subtotal:</strong> $90.00</div>
                    <a href="shopping-cart.html" className="theme-btn btn-style-three"><span className="btn-title">View Cart</span></a>
                    <a href="checkout.html" className="theme-btn btn-style-one"><span className="btn-title">Checkout</span></a>
                </div>
            </div> 
        </div>
  )
}

export default SidebarCart