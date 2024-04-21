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