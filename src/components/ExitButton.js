import React from 'react'
import { FaTimes } from 'react-icons/fa'

const ExitButton = ({ toggleAbout, toggleAnimation }) => {
    const closeWindow = () => {
        toggleAnimation(true);
    }

    return <FaTimes size={"5%"} className="exitButton" onClick={ closeWindow }/>
}

export default ExitButton
