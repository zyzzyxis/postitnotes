class NotesController < ApplicationController

  def index
    notes = Note.all
    render component: "Notes", props: {notes:notes}
  end

  # todo show a specific note
  def show
    render component: "Note"
  end

  # todo delete a specific note
  def destroy 
  end

  def udpate
  end

  #todo return a form to create a new note
  def new
  end


end
