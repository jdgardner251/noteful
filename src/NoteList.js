import React from "react";
import { Link, useParams } from "react-router-dom";
import Note from './Note'
import "./NoteList.css";

function NoteList(props) {
  const { folderId } = useParams();
  const noteListData = folderId
    ? props.notes.filter((note) => note.folderId === folderId)
    : props.notes;

  const notes = noteListData.map((note) => (
    <Note note={note} />
  ));
  return <ul>{notes}</ul>;
}

export default NoteList;
