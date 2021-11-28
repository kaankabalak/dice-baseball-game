import React from "react"

const Dice = () => {
  const [dice1, setDice1] = React.useState(0)
  const [dice2, setDice2] = React.useState(0)
  const [outcome, setOutcome] = React.useState("")

  React.useEffect(() => {
    convertDiceToOutcome()
  }, [dice1, dice2])

  const rollDice = () => {
    const dice = Math.floor(Math.random() * 6) + 1
    return dice
  }

  const rollDices = () => {
    setDice1(rollDice())
    setDice2(rollDice())
  }

  const outcomes = {
    "1/1": "single",
    "1/2": "strike",
    "1/3": "hit by pitch",
    "1/4": "ball",
    "1/5": "out",
    "1/6": "out",
    "2/2": "single",
    "2/3": "strike",
    "2/4": "out",
    "2/5": "out",
    "2/6": "out",
    "3/3": "single",
    "3/4": "strike",
    "3/5": "ball",
    "3/6": "out",
    "4/4": "double",
    "4/5": "out",
    "4/6": "single",
    "5/5": "triple",
    "5/6": "out",
    "6/6": "home run"
  }

  const convertDiceToOutcome = () => {
    if (dice1 < dice2) {
      setOutcome(outcomes[`${dice1}/${dice2}`])
    } else {
      setOutcome(outcomes[`${dice2}/${dice1}`])
    }
  }

  return (
    <div className="dice">
      <div className="dice__outcome">
        <button onClick={rollDices}>Roll!</button>
        {dice1 !== 0 && dice2 !== 0 && (
          <div>
            You got {dice1}-{dice2}
          </div>
        )}
        {outcome !== "" && <div>{outcome}</div>}
      </div>
      <div className="dice__map">
        {Object.keys(outcomes).map((key) => (
          <div>
            <span className="outcomes__key">{key}</span>
            <span>{outcomes[key]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dice
