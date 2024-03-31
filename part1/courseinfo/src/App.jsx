
const Header = (props) => {
  console.log(props)
  return (
    <>
       <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  console.log("Part",props)
  return (
    <>
       <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}
const Content = (props) => {
  console.log("Content ",props)
  return (
    <>
      <Part part={props.parts[0].part} exercises={props.parts[0].exercises}  /> 
      <Part part={props.parts[1].part} exercises={props.parts[1].exercises}  /> 
      <Part part={props.parts[2].part} exercises={props.parts[2].exercises}  /> 
    </>
  )
}


const Total = (props) => {
  console.log(props)
  return (
    <>
       <p>Number of exercises {props.number}</p>
    </>
  )
}


const App = () => {
  const parts = [
    {part: 'Half Stack application development',exercises:10},
    {part: 'Fundamentals of React',exercises:7},
    {part: 'State of a componentt',exercises:14}
  ]
  const course = 'Half Stack application development'

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
    
      <Total number={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  )
}

export default App