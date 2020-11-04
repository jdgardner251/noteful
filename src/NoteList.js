import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Note from './Note'
import "./NoteList.css";
import StoreContext from './storeContext'
import AddNote from './AddNote'

function NoteList(props) {
  const { folderId } = useParams();
  const { folders, notes } = useContext(StoreContext) // need both to 
  // pass into both Note component and AddNote component. 
  // Add note needs to know what the folder array is made up of 
  

  const noteListData = folderId
    ? notes.filter((note) => note.folderId === folderId)
    : notes;

  const noteItems = noteListData.map((note) => (
    <Note note={note} key={note.id} />
  ));
  return (
    <div>
    {/* Is this right?  Passing a prop?  Or should I use 
    a provider?? */}
    <AddNote folders={folders}/> 
      <ul>{noteItems}</ul>
    </div>
  
  )
}

export default NoteList;
