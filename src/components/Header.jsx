// Header
import React from "react";
import { NavLink } from "react-router-dom";
import Nav from './Nav';
import { appTitle } from '../globals/globals';
import { FaRegCirclePlay } from "react-icons/fa6";

const Header = () => {

    return (
        <header className="header">
            <h1 className="site-title">
                <a href="/">
                <span className="title-desktop">{appTitle}</span>
                <FaRegCirclePlay className="play-icon" size="40px" />
                </a>
            </h1>
            <Nav />
        </header>

    );
}

export default Header;