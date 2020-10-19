import React from 'react'


function NoteList(props){
    const notes = props.store.notes.map(note =>
        <li key={note.id}>
            <h3>{note.name}</h3>
            <p>Last modified {note.modified}</p>
            <button>Delete</button>
        </li>
        )
    return (
        <ul className='note-list'>
            {notes}
        </ul>
    )
}

export default NoteList;