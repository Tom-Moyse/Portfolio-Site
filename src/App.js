import React from 'react'
import { useState } from 'react';
import MainPage from './MainPage';
import LoadAnimation from './components/LoadAnimation';

function App() {
  const [playingLoadAnim, playLoadAnim] = useState(false)
  const [slideOut, toggleSlideOut] = useState(false)
  const [endAnim, setEndAnim] = useState(true)

  onanimationiteration = (e) =>{
    if (e.elapsedTime === 2){
      toggleSlideOut(true)
      playLoadAnim(false)
    } 
  }

  return (
    <>
      <LoadAnimation display = {!endAnim} slideOut = {slideOut}/>
      <MainPage display = {!playingLoadAnim} endLoad = {setEndAnim}/>
    </>
  )
}

export default App;
