import React from 'react'
import { useState } from 'react';
import MainPage from './MainPage';
import LoadAnimation from './components/LoadAnimation';

function App() {
  const [playingLoadAnim, playLoadAnim] = useState(true)

  onanimationend = (e) =>{
    console.log(e)
    var count = 0;
    if (e.animationName === "animate-width"){
        
        count++
    }
    if (count > 15){
      playLoadAnim(false)
      console.log('hi')
    }
  }

  return (
    <>
      <LoadAnimation display = {playingLoadAnim}/>
      <MainPage display = {!playingLoadAnim}/>
    </>
  )
}

export default App;
