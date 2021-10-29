import React from 'react'

const LoadAnimation = ({ slideOut }) => {
    return (
        <div className={`backgroundBox ${slideOut ? 'slideOut' : ''}`}>
            <div className='rectangles'>
                <div className={`rect ${slideOut ? 'stopAnimation' : ''}`}></div>
                <div className={`rect ${slideOut ? 'stopAnimation' : ''}`}></div>
                <div className={`rect ${slideOut ? 'stopAnimation' : ''}`}></div>
                <div className={`rect ${slideOut ? 'stopAnimation' : ''}`}></div>
                <div className={`rect ${slideOut ? 'stopAnimation' : ''}`}></div>
            </div>
        </div>
    )
}

export default LoadAnimation
