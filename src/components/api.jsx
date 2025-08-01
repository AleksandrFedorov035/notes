const BASE_URL = 'http://localhost:7070/';

async function fetchAllNotes() {
  const response = await fetch(BASE_URL + 'notes');
  return response.json();
}

async function createNote(content) {
  const body = JSON.stringify({
    content
  });

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  };

  const response = await fetch(BASE_URL + 'notes', options);
}

async function deleteNote(id) {
  const options = {
    method: 'DELETE'
  };

  const response = await fetch(BASE_URL + `notes/${id}`, options);
}

export { fetchAllNotes, createNote, deleteNote };
