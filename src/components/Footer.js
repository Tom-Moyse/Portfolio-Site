import React from 'react'
import logo from '../img/logo-white.svg'
import { FaLongArrowAltUp } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='mainFooter'>
            <a href="#" className='topLink'>
                <FaLongArrowAltUp className='upArrow' size={'4%'}/>
                <p>To Top</p>
            </a>
            <img src={logo} className='footerLogo' alt='logo'/>
            <p>© 2021 Tom Moyse</p>
        </footer>
    )
}

export default Footer
