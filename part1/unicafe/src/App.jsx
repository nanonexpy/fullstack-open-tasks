import { useState } from 'react'

const Button = (props) => (
    <button onClick={props.onClick}>{props.name}</button>
)


const Statistic = (props) => {
  if(props.text === "all" && props.value === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <p>{props.text} {props.value}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [positive, setPositive] = useState(0)
  const [average, setAverage] = useState(0)

  const handleClick = (buttonName) => {
    if(buttonName === "good") {
      setGood(good + 1)
    } else if (buttonName === "neutral") {
      setNeutral(neutral + 1)
    } else {
      setBad(bad + 1)
    }
    setTotal(total + 1)
    setAverage(total/3)
    if(total > 0) {
      setPositive((good/total)/100)
    } else {
      setPositive(0)
    }

  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => handleClick('good')} name="good" />
      <Button onClick={() => handleClick('neutral')} name="neutral" />
      <Button onClick={() => handleClick('bad')} name="bad" />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>

      <Statistic text="good" value={good} />	
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />

      <Statistic text="all" value={total} />
      <Statistic text="average" value={average} />
      <Statistic text="positive" value={positive} />
    </div>
  );
}

export default App