import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <nav className="nav-foot">
                    <div class="menu">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contacts</Link></li>
                            <li><Link to='/sign'>Sign In</Link></li>
                        </ul>
                    </div>
                </nav>
                <Outlet />
            </div>
        </div>
    )
}

export default Footer