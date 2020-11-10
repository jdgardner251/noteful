import React from 'react'
import Note from './Note'

function NoteDetail({note}) {
    console.log(note)
    return (
        <div className='note-detail'>
            <Note note={note} />
            <p>{note.content}</p>
        </div>
    )
}

export default NoteDetail;