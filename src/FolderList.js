import React from "react";
import { Link } from 'react-router-dom'
import "./FolderList.css";

function FolderList(props) {
  const folders = props.store.folders.map((folder) => (
    <li key={folder.id}>
      <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
    </li>
  ));
  return <ul className="folder-list">{folders}</ul>;
}

export default FolderList;
