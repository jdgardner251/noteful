import React from 'react'
import { Link } from 'react-router-dom'

function Note(props){
    return (
        <li className="note-list" >
      <Link to={`/note/${props.note.id}`}>
        <h3>{props.note.name}</h3>
      </Link>

      <p>Last modified {props.note.modified}</p>
      <button>Delete</button>
    </li>
    )
}

export default Note;