import React from "react"
import Sidebar from "./side-bar"
import Editor from "./editor"
import { data } from "./data"
import Split from "react-split"
import {nanoid} from "nanoid"

export default function App() {
  const [notes, setNotes] = React.useState([])
  const [currentNoteId, setCurrentNoteId] = React.useState(
<<<<<<< HEAD
    (notes[0] && notes[0].id) || ""
  );

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

=======
      (notes[0] && notes[0].id) || ""
  )
  
>>>>>>> parent of 7058002 (update App.jsx)
  function createNewNote() {
      const newNote = {
          id: nanoid(),
          body: "# Type your markdown note's title here"
      }
      setNotes(prevNotes => [newNote, ...prevNotes])
      setCurrentNoteId(newNote.id)
  }
  
  function updateNote(text) {
<<<<<<< HEAD
    setNotes((oldNotes) =>
      oldNotes.map((oldNote) => {
        return oldNote.id !== currentNoteId
          ? { ...oldNote, body: text }
          : oldNote;
      })
    );
=======
      setNotes(oldNotes => oldNotes.map(oldNote => {
          return oldNote.id === currentNoteId
              ? { ...oldNote, body: text }
              : oldNote
      }))
>>>>>>> parent of 7058002 (update App.jsx)
  }
  
  function findCurrentNote() {
      return notes.find(note => {
          return note.id === currentNoteId
      }) || notes[0]
  }
  
  return (
<<<<<<< HEAD
    <main>
      {
      notes.length > 0 ? 
      (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}
=======
      <main>
      {
          notes.length > 0 
          ?
          <Split 
              sizes={[30, 70]} 
              direction="horizontal" 
              className="split"
          >
              <Sidebar
                  notes={notes}
                  currentNote={findCurrentNote()}
                  setCurrentNoteId={setCurrentNoteId}
                  newNote={createNewNote}
              />
              {
                  currentNoteId && 
                  notes.length > 0 &&
                  <Editor 
                      currentNote={findCurrentNote()} 
                      updateNote={updateNote} 
                  />
              }
          </Split>
          :
          <div className="no-notes">
              <h1>You have no notes</h1>
              <button 
                  className="first-note" 
                  onClick={createNewNote}
              >
                  Create one now
              </button>
          </div>
          
      }
      </main>
  )
}
>>>>>>> parent of 7058002 (update App.jsx)
