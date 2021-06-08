import React from 'react';
import { NavLink } from 'react-router-dom';
import DemoUser from './auth/DemoUser';
import LogoutButton from './auth/LogoutButton';
import PDMirror from "../logo/PDMirror.mp4"

const NavBar = () => {
  return (
    <nav>
      <video height="150px" autostart="true" autoPlay muted loop
        src={PDMirror}
        type="video/mp4"
        />
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <DemoUser />
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
