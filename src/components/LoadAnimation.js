import React from 'react'

const LoadAnimation = ({ display, slideOut }) => {
    if (display) {
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
    else{
        return null;
    }
}

export default LoadAnimation
