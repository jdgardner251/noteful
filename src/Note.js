import React, { useContext } from "react";
import { Link } from "react-router-dom";
import StoreContext from "./storeContext";
import PropTypes from 'prop-types'

function Note(props) {
  const { deleteNote } = useContext(StoreContext)
  return (
    <li className="note-list">
      <Link to={`/note/${props.note.id}`}>
        <h3>{props.note.name}</h3>
      </Link>

      <p>Last modified {props.note.modified}</p>
      <button
        onClick={() => {
          fetch(`http://localhost:9090/notes/${props.note.id}`, {
            method: "DELETE",
          })
            .then((res) => {
              if (!res.ok) {
                throw new Error(res.statusText);
              }
              return res.json();
            })
            .then((data) => {
              deleteNote(props.note.id);
            })
            .catch((e) => {
              console.log(e);
            });
        }}
      >
        Delete
      </button>
    </li>
  );
}

Note.propTypes = {
  note: PropTypes.object.isRequired
}

export default Note;
