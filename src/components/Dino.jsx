import React, { useContext, useEffect, useState } from 'react'
import DinoStationaryImg from './imgs/dino-stationary.png'
import { GameContext } from '../context/GameContext'
// import ReactCssTransitionGroup from 'react-transition-group'

const Dino = () => {
  const {isStarted, dinoStep, jump, setJump, isDead} = useContext(GameContext);  


  useEffect(()=>{
    if(isStarted) window.addEventListener("keydown", ()=>{
      setJump(true)
      setTimeout(() => {
        setJump(false)
      }, 300);
    })    
  })
  

  return (
    <div>
        {!isStarted && <img src={DinoStationaryImg} className="dino"/>}
        {isStarted && <img 
            src={require('./imgs/dino-run-' + Number(!dinoStep) +'.png')} 
            className={"dino"}
            // onClick={handleJump}
            style={{bottom: jump? '50px' : '0px'}}

        />}
        {isDead && <img src={require('./imgs/dino-lose.png')} className="dino"/>}


      
        

    </div>
  )
}

export default Dino