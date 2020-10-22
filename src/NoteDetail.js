import React from 'react'
import Note from './Note'

function NoteDetail(props) {
    return (
        <div className='note-detail'>
            <Note note={props.note} />
            <p>{props.note.content}</p>
        </div>
    )
}

export default NoteDetail;