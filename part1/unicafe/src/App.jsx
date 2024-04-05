import { useState } from 'react'


const StatisticLine = ({text,value}) => {
  return (
    <div>{text}: {value}</div>
  )
}

const Button = ({onclick,text}) => {
  return(
    <button onClick={onclick}>{text}</button>
  )

}


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
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={good+neutral+bad}/>
      <StatisticLine text="average" value={(good-bad)/(good+neutral+bad)}/>
      <StatisticLine text="average" value={(good)/(good+neutral+bad)*100+" %"}/>

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
      <Button onclick={() => setGood(good + 1)} text="good"></Button>      
      <Button onclick={() => setNeutral(neutral + 1)} text="neutral"></Button>
      <Button onclick={() => setBad(bad + 1)} text="bad"></Button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App