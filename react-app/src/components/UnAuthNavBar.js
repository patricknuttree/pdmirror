import React from 'react';
import { NavLink } from 'react-router-dom';
import DemoUser from './auth/DemoUser';
import LogoutButton from './auth/LogoutButton';
import "./styles/unAuthNavBar.css"
import PDMirror from "../logo/PDMirror.mp4"

const UnAuthNavBar = () => {
  return (
    <nav>
      <div className="unauth-nav-bar-container">
        <div className="unauth-nav-logo-container">
          <video height="150px" autostart="true" autoPlay muted loop
            src={PDMirror}
            type="video/mp4"
            />
          </div>
          <div className="unauth-nav-site-title-container">
            <div className="unauth-nav-site-title">PDMIRROR</div>
          </div>
        <div className="unauth-nav-link-container">
              <NavLink to="/login" exact={true} activeClassName="active" className="unauth-navlink">
            <div className="unauth-button">
                Login
            </div>
              </NavLink>
              <NavLink to="/sign-up" exact={true} activeClassName="active" className="unauth-navlink">
            <div className="unauth-button">
                Sign Up
            </div>
              </NavLink>
            <div>
              <DemoUser/>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default UnAuthNavBar;