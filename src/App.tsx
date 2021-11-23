import React, { useState } from 'react';

import steakImg from './assets/steak.png'

const App = () => {
  const [isGameInitiated, setIsGameInitiated] = useState<boolean>(false)
  const [timeOut, setTimeOut] = useState<number>(500)
  const [mouseOverCount, setMouseOverCount] = useState<number>(0)
  const [imageXandY, setImageXAndY] = useState<number[]>([50, 50])
  const [timesClicked, setTimesCLicked] = useState<number>(0)

  const raiseScore = (): void => {
    setTimesCLicked(timesClicked  +  1)

    setTimeOut(timeOut > 0 ? timeOut - 50 : timeOut)
  }

  return(
    <div className="container">
      <h2>Welcome to steak the game</h2>
      <p>Press down for the game to start</p>
      
    <p>Mouse over count: {mouseOverCount}</p>
    <p>Clicked counts: {timesClicked}</p>
      <div className="steak-box">
        <img src={steakImg} style={{
          display: isGameInitiated ? 'block' : 'none',
          top: imageXandY[0],
          left: imageXandY[1]
        }} onMouseOver={() => {
          setTimeout(() => {
            setMouseOverCount(mouseOverCount + 1)
            setImageXAndY([Math.floor(Math.random() * (500 + 1)),Math.floor(Math.random() * (500 + 1))])
          }, timeOut);
        }}
        onClick={()  => raiseScore()}
        alt="file"
        />
      </div>

      <button onClick={() => setIsGameInitiated(true)}>Start</button>
    </div>
  )
}

export { App }