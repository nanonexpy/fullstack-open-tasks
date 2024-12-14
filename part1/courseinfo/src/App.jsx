const Header = (props) => {
  return(
    <>
      <h1>{ props.course.name }</h1>
    </>
  )
}

const Part = (prop) => {
  return(
    <>
      <p>{prop.part} {prop.exercise}</p>
    </>
  )
}

const Content = ( prop ) => {
  return (
    <>
      <Part part={prop.parts[0].name} exercise={prop.parts[0].exercises} />
      <Part part={prop.parts[1].name} exercise={prop.parts[1].exercises} />
      <Part part={prop.parts[2].name} exercise={prop.parts[2].exercises} />
    </>
  );
}

const Total = ( prop ) => {
  return(
    <>
      <p>Number of exercises { prop.parts[0].exercises + prop.parts[1].exercises + prop.parts[2].exercises }</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Use props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ]
  }

  return(
    <div>
      <Header course={course} />
      <Content parts ={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App