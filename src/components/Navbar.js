import React from 'react';
import logow from '../img/logo-white.svg';
import logob from '../img/logo-black.svg';
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const Navbar = ({ dark, setDark }) => {
    const toggleDark = () => {
        setDark(!dark)
    }
    return (
        <div className='navbar-container'>
            <img src={dark ? logow : logob} alt='logo' id='nav-logo'/>
            <nav class='navbar'>
                <ul class='navbar-list'>
                    <li><a href="#projects" className="nav-link">Projects</a></li>
                    <li><a href className="nav-link">Contact</a></li>
                    <li><a href className="nav-link" id="sun-moon" onClick={ toggleDark }> {
                        dark ? <FaSun size={30} color={'#d3d7de'}/> : <FaMoon size={30} color={'#55585c'}/>
                    } </a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
