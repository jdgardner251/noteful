import React from "react";
import { NavLink } from 'react-router-dom'
import "./FolderList.css";

function FolderList(props) {
 console.log(props.store)

  const folders = props.store.folders.map((folder) => (
    <li className="folder-list" key={folder.id}>
      <NavLink to={`/folder/${folder.id}`}>{folder.name}</NavLink>
    </li>
  ));
  return <ul >{folders}</ul>;
}

export default FolderList;
