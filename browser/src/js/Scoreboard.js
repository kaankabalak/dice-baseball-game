import React from "react"

const Scoreboard = () => {
  const [visitorScores, setVisitorScores] = React.useState(Array(9).fill(null))
  const [homeScores, setHomeScores] = React.useState(Array(9).fill(null))
  const [balls, setBalls] = React.useState(null)
  const [strikes, setStrikes] = React.useState(null)
  const [outs, setOuts] = React.useState(null)

  return (
    <div className="scoreboard">
      <div className="scoreboard__top">
        <div className="scoreboard__detail">
          <span className="scoreboard__element scoreboard__element--detail">1</span>
          <span className="scoreboard__statname">Ball</span>
        </div>
        <div className="scoreboard__detail">
          <span className="scoreboard__element scoreboard__element--detail">1</span>
          <span className="scoreboard__statname">Strike</span>
        </div>
        <div className="scoreboard__detail">
          <span className="scoreboard__element scoreboard__element--detail">1</span>
          <span className="scoreboard__statname">Out</span>
        </div>
      </div>
      <div className="scoreboard__statname scoreboard__statname--inning">
        <div className="scoreboard__element">Inning</div>
        {[...Array(9).keys()].map((val) => (
          <div className="scoreboard__element">{val + 1}</div>
        ))}
        <div className="scoreboard__element">R</div>
      </div>
      <div className="scoreboard__visitor">
        <div className="scoreboard__element">Visitor</div>
        {visitorScores.map((val) => (
          <div className="scoreboard__element">{val !== null ? (val) : " "}</div>
        ))}
        <div className="scoreboard__element">
          {[...Array(9).keys()].reduce((prev, curr) => prev + curr)}
        </div>
      </div>
      <div className="scoreboard__home">
        <div className="scoreboard__element">Home</div>
        {homeScores.map((val) => (
          <div className="scoreboard__element">{val !== null ? (val) : " "}</div>
        ))}
        <div className="scoreboard__element">
          {[...Array(9).keys()].reduce((prev, curr) => prev + curr)}
        </div>
      </div>
    </div>
  )
}

export default Scoreboard
