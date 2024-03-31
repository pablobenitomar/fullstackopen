import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const getAll=()=> good+neutral+bad
  const getAverage=()=>(good-bad)/getAll()
  const getPositive=()=>good/getAll()*100+"%"


  return (
    <div>
      <h1> Give feedback </h1>
      <button onClick={() => setGood(good + 1)}>good</button> 
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>Statistics</h1>
      <div> good: {good}</div>
      <div>neutral: {neutral}</div>
      <div>bad: {bad}</div>
      <div>all: {getAll()}</div>
      <div>average: {getAverage()}</div>
      <div>positive: {getPositive()}</div>
    </div>
  )
}

export default App