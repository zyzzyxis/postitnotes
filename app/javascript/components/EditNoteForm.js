import React from 'react'

const EditNoteForm = () =>{
  return(
    <div>
      <a href='/'>Home</a>
      <h1>Enter your new note here:</h1>
      <form action='/notes' method='post'>
        <p>Note Name</p>
        <input type='text' name='note[title]'/>
        <p>Body of Note</p>
        <input type='text' name='note[description]'/>
        <button type='submit'>Submit</button>
      </form>
      
    </div>
  )
}

export default EditNoteForm