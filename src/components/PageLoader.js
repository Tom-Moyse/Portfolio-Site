import React from 'react'
import { useState } from 'react';
import LoadAnimation from './LoadAnimation';

const PageLoader = ({ PageComponent }) => {
    const [animation, setAnimation] = useState(true)
    const [slideOut, setSlideOut] = useState(false)

    const delay = ms => new Promise(res => setTimeout(res, ms));
    const toggleAnimation = async() => {
        setSlideOut(true);
        await delay(1000);
        setAnimation(false);
    }

    onanimationiteration = (e) => {
        console.log(e)
        if (e.animationName === "animate-width" && e.elapsedTime % 2 === 1 && !slideOut){
            toggleAnimation();
        }  
    }

    if (animation && !slideOut){
        return <LoadAnimation slideOut={slideOut}></LoadAnimation>
    }
    else{
        return (
            <>
                <LoadAnimation slideOut={slideOut}></LoadAnimation>
                <PageComponent />
            </>
        )
    }
}

export default PageLoader
