import React, {useState, createContext} from 'react';

export const GameContext = createContext(); //initialize context


function GameContextProvider (props){
    const [isStarted, setStart] = useState(false)
    const [score, setScore] = useState(0)
    const [dinoStep, setDinoStep] = useState(false) //0(false) is left foot step, 1(true) is right foot step
    const [isDead, setDead] = useState(false)
    const [jump, setJump] = useState(false)


    // const [selectedBrand, setSelectedBrand] = useState(null)

    // function addBrand(newBrand){
    //     setBrands([...brands, newBrand])
    // }
    

    return(
        <GameContext.Provider value={{isStarted, setStart, score, setScore, dinoStep, setDinoStep, jump, setJump, isDead, setDead}}>
            {props.children }
        </GameContext.Provider>
    )
}
export default GameContextProvider;