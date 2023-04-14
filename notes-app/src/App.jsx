import React, { useEffect } from "react";
import Sidebar from "./side-bar";
import Editor from "./editor";
import { data } from "./data";
import Split from "react-split";
import { nanoid } from "nanoid";

export default function App() {
  const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  );

  React.useEffect(() => {
    const selectedNote = localStorage.getItem("selectedNote")
    if(selectedNote){
      setCurrentNoteId(selectedNote)
    }
  }, []);
  
  function createNewNote() {
    
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
    localStorage.setItem("notes", JSON.stringify([...notes, newNote]));
  }

  function deleteNotes(noteId) {
    // console.log(noteId);
    const deletedNote = notes.filter(el => el.id !== noteId)
    setNotes(deletedNote)
    localStorage.setItem("notes", JSON.stringify(deletedNote));
}

  function updateNote(text) {
    if (currentNoteId) {
      setNotes((notes) =>
        notes.map((note) => (note.id === currentNoteId ? { ...note, body: text } : note))
      );
    }
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }


  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNotes={deleteNotes}
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