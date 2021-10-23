import React from 'react'
import '../css/main.css'

const About = ({ toggleAbout }) => {
    return (
        <div className="aboutModal">
            <div className="leftAbout">
                <h2>About Me</h2>
            </div>
            <div className="rightAbout">
                <div className="aboutContent">
                    <h2>Some useful links</h2>
                    <a href="mailto:thomashmoyse@gmail.com">Email Me</a>
                    <a href="www.linkedin.com/in/tom-moyse-88765a144">LinkedIn</a>
                    <a href="https://twitter.com/TomMoyse">Twitter</a>
                    <a href="https://github.com/Tom-Moyse">Github</a>
                </div>
            </div>
        </div>
    )
}

export default About
