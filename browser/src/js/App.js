import React from "react"
import Dice from "./Dice"
import Scoreboard from "./Scoreboard"

function App() {
  return (
    <div className="main">
      <h1>Dice Baseball Game</h1>
      <Scoreboard />
      <Dice />
    </div>
  )
}

export default App
