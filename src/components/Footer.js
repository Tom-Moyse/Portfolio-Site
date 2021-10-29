import React from 'react'
import logo from '../img/logo-white.svg'

const Footer = () => {
    return (
        <footer>
            <img src={logo} className='footerLogo' alt='logo'/>
            <p>© 2021 Tom Moyse</p>
        </footer>
    )
}

export default Footer
