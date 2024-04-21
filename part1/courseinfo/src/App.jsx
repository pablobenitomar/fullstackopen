
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

const Content = (props) =>{
  console.log("Content",props)
  return (
    <>
       <Part part={props.parts[0]} />
       <Part part={props.parts[1]} />
       <Part part={props.parts[2]} />
    </>
  ) 
}

const Total = ({parts}) => {
  
  const total = parts.reduce(
    (s, p) => {
      return s+p.exercises
    }
    ,0)
  
  return (
    <>
       <p><b>Total of {total} exercises</b></p>
    </>
  )
}

const Course = ({course}) =>{
  return(
    <>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    </>
  )

}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  

  return (
    <div>
      <Course course={course}/>
    </div>
  )
  
}


export default App