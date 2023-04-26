import React, { useContext, useEffect } from 'react'
import { GameContext } from '../context/GameContext'


const Score = () => {
  const {score, setScore, isStarted, setDinoStep} = useContext(GameContext)

  useEffect(()=>{
    setTimeout(() => {
      setScore((score) => score + 1);
      setDinoStep(prevStep => !prevStep)
    }, 100);  //Runs on every render
  },)

  return (
    <div>
      {!isStarted? <p className="score">0</p> : 
        <p className="score">{score}</p> 
      }
    </div>
  )
}

export default Score 