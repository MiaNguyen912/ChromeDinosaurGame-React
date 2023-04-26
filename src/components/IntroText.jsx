import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../context/GameContext'

export const IntroText = () => {
  const {isStarted, setStart, setScore, score, setGoLeft} = useContext(GameContext)
  useEffect(()=>{
    window.addEventListener("keydown", handleStart)
  },[])

  function handleStart(){
    setStart(true);
    setScore(0);  
    window.removeEventListener('keydown', handleStart) //prevent score turn back to 0 when key is pressed again
  }
  
  return (
    <div>
      {!isStarted && <p className="intro-text">Press Any Key To Start</p>}
    </div>
  )
}
