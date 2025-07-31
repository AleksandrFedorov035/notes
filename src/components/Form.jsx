import { useState } from 'react';
import { createNote } from './api';

function Form({ refreshData }) {
    const [message, setMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!message) return;

        try {
            await createNote(message);
            refreshData();
            setMessage('');

        } catch (err) {
            console.error(`failed to create note:` + err);
        }

    };

    return (
        <form className="form" onSubmit={onSubmit}>
            <input
                type="text"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Добавить</button>
        </form>
    );
}

export default Form;
