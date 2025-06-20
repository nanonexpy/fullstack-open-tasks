import { useState } from 'react'

const Button = (props) => (
    <button onClick={props.onClick}>{props.name}</button>
)

const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value} </td>
    </tr>
  )
}


const Statistic = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  if(total === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <>
    <table border={1}>
      <StatisticsLine text="Good" value={good} />
      <StatisticsLine text="Neutral" value={neutral} />
      <StatisticsLine text="Bad" value={bad} />
      <StatisticsLine text="Total" value={total} />
      <StatisticsLine text="Average" value={(total) / 3} />
      <StatisticsLine text="Positive" value={`${((good / total) * 100)} %`} />
    </table>
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