import React from 'react';
import { NavLink } from 'react-router-dom';
import DemoUser from './auth/DemoUser';
import LogoutButton from './auth/LogoutButton';
import "./styles/authNavBar.css"
import PDMirror from "../logo/PDMirror.mp4"

const AuthNavBar = () => {
  return (
    <nav>
      <div className="auth-nav-bar-container">
        <div className="auth-nav-logo-container">
        <NavLink to="/" exact={true} activeClassName="active" className="auth-navlink">
          <video height="150px" autostart="true" autoPlay muted loop
            src={PDMirror}
            type="video/mp4"
            />
        </NavLink>
          </div>
        <div className="auth-nav-site-title-container">PDMIRROR</div>
        <div className="auth-nav-link-container">
              <NavLink to="/" exact={true} activeClassName="active" className="auth-navlink">
            <div className="auth-button">
                Home
            </div>
              </NavLink>
            <div>
              <LogoutButton />
            </div>
        </div>
      </div>
    </nav>
  );
}

export default AuthNavBar;
