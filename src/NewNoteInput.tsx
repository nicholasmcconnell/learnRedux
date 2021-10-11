import { ChangeEvent } from 'hoist-non-react-statics/node_modules/@types/react';
import React, { useState } from 'react'

interface NewNoteInputProps {
    addNote(note: string): void;
}
export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
    const [note, setNote] = useState('');

    const updateNote = (e: ChangeEvent<HTMLInputElement>) => {
        setNote(e.target.value);
    }

    const onAddNoteClick = () => {
        addNote(note);
        setNote('');
    }
    return (
        <div>
            <input onChange={updateNote} value={note} type='text' name='note' placeholder='Note' />
            <button onClick={onAddNoteClick}>Add Note</button>
        </div>
    )
}
