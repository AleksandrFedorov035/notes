import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:7070/notes');
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const addNote = async () => {
    try {
      const post = await axios.post('http://localhost:7070/notes', {
        id: 0,
        content: newNote
      });
      setNewNote('');
      fetchNotes();
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:7070/notes/${id}`);
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Notes</h1>
        <img src="../public/refresh.svg" alt="" onClick={fetchNotes} />
      </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        addNote();
      }}>
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Enter new note"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {notes.map(note => {
          if (!note.content) return
          return (
            <li key={note.id}>
              {note.content}
              <button onClick={() => deleteNote(note.id)}>x</button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
