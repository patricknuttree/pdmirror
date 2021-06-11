import React from 'react';
import { NavLink } from 'react-router-dom';
import DemoUser from './auth/DemoUser';
import LogoutButton from './auth/LogoutButton';
import "./styles/footer.css"

function Footer(){
    return (
        <footer>
            <div className="footer-container-outer">
                <div className="footer-container-inner">
                    <div className="footer-dev-name-container">
                        <div className="footer-dev-name">PDMirror Developer: Patrick Nusbaum</div>
                    </div>
                    <hr></hr>
                    <div className="footer-link-container">
                        <a className="footer-link" href="https://github.com/patricknuttree" target="_blank">Github</a>
                        <a className="footer-link" href="https://www.linkedin.com/in/patrick-nusbaum-mpa" target="_blank">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer