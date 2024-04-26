// Nav
import React from "react";
import { NavLink } from 'react-router-dom';
const Nav = () => {

    function blur(e){
        e.target.blur();
    }

    return (
        <nav className="main-nav" onClick={blur}>
            <ul>
                <li><NavLink to="/" >Home</NavLink></li>
                <li><NavLink to="/favourite">Favourite</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
               
            </ul>
        </nav>
    );

};
export default Nav;
