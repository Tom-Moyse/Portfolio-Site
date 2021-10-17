import React from 'react'
import logo from '../img/logo.svg'
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const Navbar = ({ dark, setDark }) => {
    const toggleDark = () => {
        setDark(!dark)
    }
    return (
        <div className='navbar'>
            <img src={logo} alt='logo' id='nav-logo'/>
            <nav>
                <ul>
                    <li><a href="#projects" className="nav-link">Projects</a></li>
                    <li><a href className="nav-link">Contact</a></li>
                    <li><a href className="nav-link" id="sun-moon" onClick={ toggleDark }>{ dark ? FaSun : FaMoon }</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
