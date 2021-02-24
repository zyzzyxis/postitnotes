import React from 'react'

const Note = (props) =>{
  return(
    <div>
      <h1>See the note below</h1>
      <h1>Title: {props.note.title}</h1>
      <h2>Here is your note:{props.note.description}</h2>
      <a href='/'>Home</a>
    </div>
  )
}

export default Note