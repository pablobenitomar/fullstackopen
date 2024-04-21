
const Header = ({course}) => {
  return (
    <>
       <h1>{course}</h1>
    </>
  )
}

const Part = ({part}) => {
  return (
    <>
      <p key={part.id}>{part.name} {part.exercises}</p>
    </>
  )
}

const Content = ({parts}) =>{
  return (
    <>
    {parts.map(p => {return <Part part={p} />})}         
    </>
  ) 
}

const Total = ({parts}) => {
  
  const total = parts.reduce((s, p) => {return s + p.exercises},0)
  
  return (
    <>
       <p><b>Total of {total} exercises</b></p>
    </>
  )
}

const Course = ({course}) =>{
  return(
    <div key={course.id}>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )

}



const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  

  return (
    <div>
      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}     
    </div>
  )
  
}


export default App