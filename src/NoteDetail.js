import React from 'react'
import Note from './Note'

function NoteDetail({note}) {
    
    return (
        <div className='note-detail'>
        {note ? (
            <>
            <Note note={note} />
            <p>{note.content}</p>
            </>
        ) :(<div>No Note to Display</div>)
        }
        </div>   
    )
}

export default NoteDetail;