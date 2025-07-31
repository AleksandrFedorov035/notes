import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import Note from './components/Note';
import { fetchAllNotes } from './components/api';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchAllNotes().then(data => setNotes(data));
  }, []);

  const refreshData = () => {
    fetchAllNotes().then(data => setNotes(data));
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Notes</h1>
        <img src="./refresh.svg" alt="refresh" onClick={refreshData} />
      </div>
      <Form refreshData={refreshData} />
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <Note note={note} refreshData={refreshData} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
