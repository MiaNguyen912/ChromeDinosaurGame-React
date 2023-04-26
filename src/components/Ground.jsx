import React from 'react'
import GroundImg from './imgs/ground.png'

export const Ground = () => {
  return (
    <div className='ground'>
        <img src={GroundImg} className="ground" />
        <img src={GroundImg} className="ground"/>
    </div>
  )
}
