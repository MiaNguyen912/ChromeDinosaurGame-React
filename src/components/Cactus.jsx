import React, { useContext, useEffect, useState } from 'react'
import CactusImg from './imgs/cactus.png'
import { GameContext } from '../context/GameContext'


export const Cactus = () => {
  const{isStarted, jump, setDead, setStart, score} = useContext(GameContext)
  
  const [goLeft, setGoLeft] = useState(0)

  useEffect(()=>{
    if(isStarted){
      goLeft<=830 && setGoLeft(prevGoLeft => prevGoLeft+0.05)
      if(goLeft>=730 && goLeft<=820 && !jump){
        setDead(true)
        alert('Your Score: ' + score);

        setStart(false)
      }
      goLeft>830 && setGoLeft(0)  

    } 

    }
      
  )
  return (
    <div>
        <img 
          src={CactusImg} 
          className="cactus"
          style={{right: goLeft}}
        />
        
    </div>
  )
}

//730 -830