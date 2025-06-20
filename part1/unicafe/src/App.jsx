import { useState } from 'react'

const Button = (props) => (
    <button onClick={props.onClick}>{props.name}</button>
)


const Statistic = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  if(total === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <>
    <p>Good {good}</p>
    <p>Neutral {neutral}</p>
    <p>Bad {bad}</p>
    <p>Total {total}</p>
    <p>Average {(total / 3)}</p>
    <p>Positive {((good / total) * 100)} %</p>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (buttonName) => {
    if(buttonName === "good") {
      setGood(good + 1)
    } else if (buttonName === "neutral") {
      setNeutral(neutral + 1)
    } else {
      setBad(bad + 1)
    }
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => handleClick('good')} name="good" />
      <Button onClick={() => handleClick('neutral')} name="neutral" />
      <Button onClick={() => handleClick('bad')} name="bad" />
      <h1>statistics</h1>
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App