import React from "react";
import octocat from "../../assets/github-user-img/octocat.png";
import location from "../../assets/github-user-img/icon-location.svg";
import website from "../../assets/github-user-img/icon-website.svg";
import twitter from "../../assets/github-user-img/icon-twitter.svg";
import company from "../../assets/github-user-img/icon-company.svg";
import "./Ghsearch.css";
import { useDarkMode } from "../useDarkMode";
import { Toggle } from "./Toggle";
import { GlobalStyles, lightTheme, darkTheme } from "../GlobalStyle";
import {ThemeProvider} from "styled-components"
import Backbtn from "../Backbtn/Backbtn";
import { useState } from "react"

function Ghsearch() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  const [show, setShow] = useState(false);
  const [user, setUser] = useState('');
  const handleShowClick = ()=> {
    if(!user == ""){
      setShow(true)
    }
  }
  return (
    <>
    <ThemeProvider theme={themeMode}>
    <Backbtn/>
    <GlobalStyles/>
    <div className="g-body">
      <div className="g-container">
        <div className="g-header">
          <h1 className="g-title">devfinder</h1>
          <div className="g-mode-items">
            {themeMode === lightTheme ? <p className="g-mode-type">Light</p> : <p className="g-mode-type">Dark</p>}
            <Toggle theme={theme} themeToggler = {themeToggler} />
          </div>
        </div>
        <div className="g-search-bar">
          <input 
            name="searchBar"
            type="text"
            placeholder="Search GitHub username..."
            value={user}
            onChange={(e) => setUser(e.target.value)} 
          />
          <div className="g-btn" onClick={handleShowClick}>Search</div>
          {show && <div className="g-no-result-msg">User not found !</div>}
        </div>

        <div className="g-main">
          <div className="g-profile-img">
            <img src={octocat} alt="" />
          </div>
          <div className="g-content">
            <div className="g-content-header">
              <div className="g-profile-username">
                The Octocat
                <p>@octocat</p>
              </div>
              <div className="g-profile-joindate">Joined 25 Jan 2011</div>
            </div>
            <div className="g-content-bio">This user has no bio</div>
            <div className="g-content-data">
              <div className="g-repos">
                <h4>Repos</h4>
                <p>8</p>
              </div>
              <div className="g-followers">
                <h4>Followers</h4>
                <p>3938</p>
              </div>
              <div className="g-following">
                <h4>Following</h4>
                <p>9</p>
              </div>
            </div>

            <div className="g-content-info">
              <div className="g-item" id="location">
                <img src={location} alt="" />
                <h3>San Francisco</h3>
              </div>
              <div className="g-item" id="g-website">
                <img src={website} alt="" />
                <h3>https://github.blog</h3>
              </div>
              <div className="g-item" id="twitter">
                <img src={twitter} alt="" />
                <h3>Not Available</h3>
              </div>
              <div className="g-item" id="company">
                <img src={company} alt="" />
                <h3>@github</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ThemeProvider>  
    </>
  );
}

export default Ghsearch;
