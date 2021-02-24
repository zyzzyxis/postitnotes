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
          <a href={`/notes/${note.id}`}>Show Notes</a>
          <a href={`/notes/${note.id}/edit`}>Edit Notes</a>
          <a href={`/notes/${note.id}`} data-method='delete'> Delete This Note </a>
        </div>
      )
    })
    
  }   
  return(
    <div className='notes-container'> 
      <h1>NOTES</h1>
      <a href='/notes/new'>New Note</a>
      {renderNotes()}
    </div>
  )
}

export default Notes