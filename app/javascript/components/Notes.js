import React from 'react'

const Notes = (props) => {
  const notes = props.notes
  console.log(notes)

  const renderNotes = () => {
    return notes.map(note => {
      return (
        <div className='note-container'>
          <h1>{note.title}</h1>
          <h1>id: {note.id}</h1>
          <p>note content: {note.description}</p>
          <a href={`/notes/${note.id}`}>show</a>
        </div>
      )
    })
    
  }
  return(
    <div className='notes-container'> 
      <h1>NOTES HERE</h1>
      {renderNotes()}
    </div>
  )
}

export default Notes