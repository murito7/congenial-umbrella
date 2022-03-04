import React from 'react';
import "./Cart.css"
import image from "../../assets/ecommerce-img/image-product-1-thumbnail.jpg"
import deletIcon from "../../assets/ecommerce-img/icon-delete.svg"

export default function Cart(props) {
  return (
    <div className='cart-wrapper'>
        <h3>Cart</h3>
        {props.items == 0 ? (<p>Your cart is empty</p>) : (
        <>
        <div className='items-wrapper'>
        <img src={image} />
        <p className='quantity'>
         Autumn Limited Edition...<br/>
         $125.00 x {props.items} - {(props.items * 125)}$
         <img src={deletIcon} className="delete-icon" onClick={props.checkout}/>
         </p>
        </div>
        <div className="e-add-btn-checkout" onClick={props.checkout}>Checkout</div>
        </>
        )}
    </div>
  )
}
