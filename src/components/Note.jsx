import { deleteNote } from './api';

const Note = ({ note, refreshData }) => {

  const handleRemove = async () => {
    try {
      await deleteNote(note.id);
      refreshData();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="note-container">
      <div className="text">{note.content}</div>
      <button type="button" onClick={handleRemove}>
        Удалить
      </button>
    </div>
  );
};

export default Note;
