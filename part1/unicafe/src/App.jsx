import { useState } from 'react'

// a proper place to define a component
const Statistics = ({good,neutral,bad}) => {
  //const {good,neutral,bad} = props
  if (good+neutral+bad==0)
    return (
      <div>
        <h1>Statistics</h1>
        <div>No feedback given</div>
      </div>
      )
  else
    return (
      <div>
      <h1>Statistics</h1>
      <div>good: {good}</div>
      <div>neutral: {neutral}</div>
      <div>bad: {bad}</div>
      <div>all: {good+neutral+bad}</div>
      <div>average: {(good-bad)/(good+neutral+bad)}</div>
      <div>positive: {(good)/(good+neutral+bad)*100} %</div>
      </div>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1> Give feedback </h1>
      <button onClick={() => setGood(good + 1)}>good</button> 
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App