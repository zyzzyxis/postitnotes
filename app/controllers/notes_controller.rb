class NotesController < ApplicationController

  def index
    notes = Note.all
    render component: "Notes", props: {notes:notes}
  end

  # todo show a specific note
  def show
    render component: "Note"
  end

  ##// todo delete a specific note
  def destroy 
    note = Note.find(params[:id])
    note.destroy
    redirect_to root_path
  end

  def edit
    render component: "EditNoteForm"
  end

  #todo return a form to create a new note
  def new
    render component: "NewNoteForm"
  end


end
