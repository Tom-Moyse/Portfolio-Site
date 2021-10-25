import React from 'react'
import 'animate.css';

const CentralText = ({ dark, showAbout }) => {
    return (
        <div className='centralTextBox'>
            <div className='content'>
                <h1>Tom Moyse</h1>
                <h3 style={{'marginBottom': '1%'}}>Computer Science Student</h3>
                <button className='formButton' style={{color: dark ? '#d3d7de' : '#ffffff'}} onClick={ () => {showAbout(true)} }>About Me</button>
            </div>
        </div>
    )
}

export default CentralText
