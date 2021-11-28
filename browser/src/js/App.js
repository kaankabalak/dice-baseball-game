import React from "react"
import Dice from "./Dice"
import Scoreboard from "./Scoreboard"
import Field from "./Field"

function App() {
  return (
    <div className="main">
      <h1>Dice Baseball Game</h1>
      <Scoreboard />
      <Dice />
      <Field />
    </div>
  )
}

export default App
