import React from 'react'
import './NoteList.css'


function NoteList(props){
    const notes = props.notes.map(note =>
        <li class='note-list' key={note.id}>
            <h3>{note.name}</h3>
            <p>Last modified {note.modified}</p>
            <button>Delete</button>
        </li>
        )
    return (
        <ul>
            {notes}
        </ul>
    )
}

export default NoteList;