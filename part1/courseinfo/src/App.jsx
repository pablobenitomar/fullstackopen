
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
        {props.part.name} {props.part.exercises}
      </p>
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
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
      
    
      <Total number={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  )
}


export default App