import React from 'react'
import "./Ecommerce.css";
import imgavatar from "../../assets/ecommerce-img/image-avatar.png"
import product1 from "../../assets/ecommerce-img/image-product-1.jpg"
import product1th from "../../assets/ecommerce-img/image-product-1-thumbnail.jpg"
import product2th from "../../assets/ecommerce-img/image-product-2-thumbnail.jpg"
import product3th from "../../assets/ecommerce-img/image-product-3-thumbnail.jpg"
import product4th from "../../assets/ecommerce-img/image-product-4-thumbnail.jpg"
import plus from "../../assets/ecommerce-img/icon-plus.svg"
import minus from "../../assets/ecommerce-img/icon-minus.svg"
import eLogo from "../../assets/ecommerce-img/logo.svg"
import Backbtn from '../Backbtn/Backbtn'

function showNav() {
  const toggleButton = document.getElementsByClassName("e-hamburger")[0];
  const closeButton = document.getElementsByClassName("e-close-btn")[0];
  
  const navbarMobile = document.getElementsByClassName("e-navbar-mobile")[0];
  const navbarToggle = () => navbarMobile.classList.toggle("active");
  
  toggleButton.addEventListener("click", navbarToggle);
  closeButton.addEventListener("click", navbarToggle);
}

function Ecommerce() {
  return (
    <>
      <Backbtn/>
      <body className='e-body'>
  <div className="e-container">
    <div className="e-navbar-mobile">
      <svg className="e-close-btn"  onClick={()=> showNav()} width="14" height="15" xmlns="http://www.w3.org/2000/svg">
        <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/>
      </svg>
      <ul>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
    <div className="e-navbar">
      <div className="e-navbar-left">
        <svg className="e-hamburger"  onClick={()=> showNav()} width="16" height="15" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd"/>
        </svg>
        <img className='eLogo' src={eLogo}></img>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="e-navbar-right">
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/>
        </svg>
        <img src={imgavatar} alt=""></img>
      </div>
    </div>
    <div className="e-main">
      <div className="e-left-side">
        <div className="e-main-image">
          <svg className="e-previous" width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/>
          </svg>
          <img className="e-main-img" src={product1} alt=""></img>
          <svg className='e-next' width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/>
          </svg>
        </div>
        <div className="e-main-images">
          <div className="e-grid-img" id='img-1'><img src={product1th} alt=""></img></div>
          <div className="e-grid-img" id='img-2'><img src={product2th} alt=""></img></div>
          <div className="e-grid-img" id='img-3'><img src={product3th} alt=""></img></div>
          <div className="e-grid-img" id='img-4'><img src={product4th} alt=""></img></div>
        </div>
      </div>
      <div className="e-right-side">
        <div className="e-title">Sneaker company</div>
        <div className="e-title-secondary">Fall Limited Edition Sneakers</div>
        <div className="e-description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</div>
        <div className="e-pricing">
          <div className="e-price">$125.00</div>
          <div className="e-price-discount">50%</div>
        </div>
        <div className="e-money-saved">$250.00</div>
        <div className="e-add-to-cart">
          <div className="e-add-remove-items">
            <img src={plus}></img>
            0
            <img src={minus}></img>
          </div>
          <div className="e-add-btn">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"/></svg>
            Add to cart
          </div>
        </div>
      </div>
    </div>

  </div>
  </body>
    </>
  )
}

export default Ecommerce