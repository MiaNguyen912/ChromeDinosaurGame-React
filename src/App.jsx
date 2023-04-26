import React, { useEffect } from 'react'
import GameContextProvider from './context/GameContext'

import Score from './components/Score'
import { IntroText } from './components/IntroText'
import Dino from './components/Dino'
import { Ground } from './components/Ground'
import { Cactus } from './components/Cactus'

function App() {
  
  
  return (
    <GameContextProvider>
      <div>
        <Score />
        <IntroText />
        <Dino/>
        <Cactus/> 
        <Ground/>
      </div>
    </GameContextProvider>
  )
}

export default App