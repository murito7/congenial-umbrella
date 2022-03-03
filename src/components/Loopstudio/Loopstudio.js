import React from 'react'
import "./Loopstudio.css"
import closebtn from "../../assets/loopstudios-img/icon-close.svg"
import logo from "../../assets/loopstudios-img/logo.svg"
import hamburger from "../../assets/loopstudios-img/icon-hamburger.svg"
import interactive from "../../assets/loopstudios-img/desktop/image-interactive.jpg"
import fb from "../../assets/loopstudios-img/icon-facebook.svg"
import twitter from "../../assets/loopstudios-img/icon-twitter.svg"
import pint from "../../assets/loopstudios-img/icon-pinterest.svg"
import insta from "../../assets/loopstudios-img/icon-instagram.svg"
import Backbtn from '../Backbtn/Backbtn'

function Loopstudio() {
  const showNav = () => {
    const toggleButton = document.getElementsByClassName("loop-toggle-btn")[0];
    const closeButton = document.getElementsByClassName("loop-close-btn")[0];

    const navbarMobile = document.getElementsByClassName("loop-navbar-mobile")[0];
    const navbarToggle = () => navbarMobile.classList.toggle("active");

    toggleButton.addEventListener("click", navbarToggle);
    closeButton.addEventListener("click", navbarToggle);
  }
  return (
    <>
    <Backbtn/>
        <div className="loop-showcase-hero">
            <div className="loop-items-wrapper">
                <nav className="loop-navbar-mobile">
                    <img onClick={()=> showNav()} className="loop-close-btn" 
                    src={closebtn}
                    alt=""></img>
                    <img className="loop-logo"
                    src={logo}
                    alt=""></img>
                    <ul>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Events</li>
                    <li>Products</li>
                    <li>Support</li>
                    </ul>
                </nav>
                <nav className="loop-navbar"> 
                    <img className="loop-logo"
                    src={logo}
                    alt=""></img>
                    <img onClick={()=> showNav()} className="loop-toggle-btn" 
                    src={hamburger}
                    alt=""></img>
                    <ul>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Events</li>
                    <li>Products</li>
                    <li>Support</li>
                    </ul>
                </nav>
                    <div className="loop-text-wrapper">
                        <h1>IMMERSIVE EXPERIENCES <br/>THAT DELIVER</h1>
                  </div>              
            </div>
        </div>

        <div className="loop-showcase">
            <div className="loop-showcase-img">
                <img src={interactive} alt=''></img>
            </div>
            <div class="loop-showcase-text">
                <h1>The leader in<br/>interactive VR</h1>
                <p>Founded in 2011, Loopstudios has been producing world-class virtual reality 
                projects for some of the best companies around the globe. Our award-winning 
                creations have transformed businesses through digital experiences that bind 
                to their brand.</p>
            </div>
        </div>
        <div className="loop-showcase-grid">
    <div className="loop-showcase-grid-header">
      <div className="loop-showcase-grid-header-title">
        Our creations
      </div>
    </div>
      <div className="loop-showcase-grid-items">
        <div className="loop-earth showcase-grid-item">
          <div className="loop-grid-item-text">deep<br/>earth</div>
        </div>
        <div className="loop-night showcase-grid-item">
          <div className="loop-grid-item-text">night<br/>arcade</div>
        </div>
        <div className="loop-soccer showcase-grid-item">
          <div className="loop-grid-item-text">soccer<br/>team vr</div>
        </div>
        <div className="loop-thegrid showcase-grid-item">
          <div className="loop-grid-item-text">the<br/>grid</div>
        </div>
        <div className="loop-from-above showcase-grid-item">
          <div className="loop-grid-item-text">from up<br/>above vr</div>
        </div>
        <div className="loop-pocket showcase-grid-item">
          <div className="loop-grid-item-text">pocket<br/>borealis</div>
        </div>
        <div className="loop-curiosity showcase-grid-item">
          <div className="loop-grid-item-text">the<br/>curiosity</div>
        </div>
        <div className="loop-eye showcase-grid-item">
          <div className="loop-grid-item-text">make it<br/>fisheye</div>
        </div>
      </div>
      <div className="loop-showcase-grid-header-button">
        See all
      </div>
  </div>
  <footer className="loop-footer">
    <div className="loop-left">
      <div className="loop-logo">
        <img src={logo} alt=""></img>
      </div>
      <div className="loop-footer-nav">
        <ul>
           <li>About</li>
           <li>Careers</li>
           <li>Events</li>
           <li>Products</li>
           <li>Support</li>
        </ul>
      </div>
    </div>
    <div className="loop-footer-right">
      <div className="loop-socials">
        <a href="#"><img src={fb} alt=""></img></a>
        <a href="#"><img src={twitter} alt=""></img></a>
        <a href="#"><img src={pint} alt=""></img></a>
        <a href="#"><img src={insta} alt=""></img></a>
      </div>
      <div className="loop-copy">&copy; 2021 Loopstudios. All rights reserved.</div>
    </div>
  </footer>
    </>
  )
}

export default Loopstudio
