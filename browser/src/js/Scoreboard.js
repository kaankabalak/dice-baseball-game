import React from "react"

const Scoreboard = () => {
  const [visitorScores, setVisitorScores] = React.useState(Array(9).fill(null))
  const [homeScores, setHomeScores] = React.useState(Array(9).fill(null))
  const [balls, setBalls] = React.useState(0)
  const [strikes, setStrikes] = React.useState(0)
  const [outs, setOuts] = React.useState(0)

  return (
    <div className="scoreboard">
      <div className="scoreboard__top">
        <div className="scoreboard__detail">
          <span className="scoreboard__element scoreboard__element--detail">
            {balls !== null ? balls : ""}
          </span>
          <span className="scoreboard__statname">Ball</span>
        </div>
        <div className="scoreboard__detail">
          <span className="scoreboard__element scoreboard__element--detail">
            {strikes !== null ? strikes : ""}
          </span>
          <span className="scoreboard__statname">Strike</span>
        </div>
        <div className="scoreboard__detail">
          <span className="scoreboard__element scoreboard__element--detail">
            {outs !== null ? outs : ""}
          </span>
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
          <div className="scoreboard__element">{val !== null ? val : " "}</div>
        ))}
        <div className="scoreboard__element">
          {visitorScores.reduce((prev, curr) => prev + curr)}
        </div>
      </div>
      <div className="scoreboard__home">
        <div className="scoreboard__element">Home</div>
        {homeScores.map((val) => (
          <div className="scoreboard__element">{val !== null ? val : " "}</div>
        ))}
        <div className="scoreboard__element">
          {homeScores.reduce((prev, curr) => prev + curr)}
        </div>
      </div>
    </div>
  )
}

export default Scoreboard
