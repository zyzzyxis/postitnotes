import React from 'react'

const EditNoteForm = (props) =>{
  return(
    <div>
      <a href='/'>Home</a>
      <p>Id Here:{props.note.id} </p>
      <h1>Edit your note here:</h1>
      <form action={`/notes/${props.note.id}`} method='post'>
        <input type='hidden' name="_method" value="patch"/>
        <p>Note Name</p>
        <input defaultValue={props.note.title} type='text' name='note[title]'/>
        <p>Body of Note</p>
        <input defaultValue={props.note.description} type='text' name='note[description]'/>
        <button type='submit'>Submit</button>
      </form>
      
    </div>
  )
}

export default EditNoteForm