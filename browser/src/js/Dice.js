import React from "react"

const Dice = () => {
  const [dice1, setDice1] = React.useState(0);
  const [dice2, setDice2] = React.useState(0);

  const rollDice = () => {
    const dice = Math.floor(Math.random() * 6) + 1;
    return dice;
  }

  const rollDices = () => {
    setDice1(rollDice());
    setDice2(rollDice());
  }

  return (
    <div>
      <button onClick={rollDices}>Roll!</button>
      {(dice1 !== 0 && dice2!== 0) && <div>You got {dice1}-{dice2}</div>}
    </div>
  )
}

export default Dice
