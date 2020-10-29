import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Note from './Note'
import "./NoteList.css";
import StoreContext from './storeContext'

function NoteList(props) {
  const { folderId } = useParams();
  const { notes } = useContext(StoreContext)

  const noteListData = folderId
    ? notes.filter((note) => note.folderId === folderId)
    : notes;

  const noteItems = noteListData.map((note) => (
    <Note note={note} key={note.id} />
  ));
  return <ul>{noteItems}</ul>;
}

export default NoteList;
