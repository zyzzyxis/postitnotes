class NotesController < ApplicationController

  def index
    notes = Note.all
    render component: "Notes", props: {notes:notes}
  end

  # todo show a specific note
  def show
    note = Note.find(params[:id])
    render component: "Note", props: {note: note}
  end

  ##// todo delete a specific note
  def destroy 
    note = Note.find(params[:id])
    note.destroy
    redirect_to root_path
  end

  def edit
    note = Note.find(params[:id])
    render component: "EditNoteForm", props: {note: note}
  end

  def update
    note = Note.find(params[:id])
    if note.update(note_params)
      redirect_to root_path
  else
    render component: "EditNoteForm", props: {note: note}
  end
  end

  #todo return a form to create a new note
  def new
    render component: "NewNoteForm"
  end

  def create
    note = Note.new(note_params)
    if note.save
        redirect_to root_path
    else
      render component: "NewNoteForm"
    end
  end

  private

  def note_params
    params.require(:note).permit(:title, :description)
  end

end
