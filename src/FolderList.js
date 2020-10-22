import React from "react";
import { NavLink, useParams } from 'react-router-dom'
import "./FolderList.css";

function FolderList(props) {
  const { folderId } = useParams();
  console.log(folderId)

  const folders = props.store.folders.map((folder) => (
    <li className="folder-list" key={folder.id}>
      <NavLink to={`/folder/${folder.id}`}>{folder.name}</NavLink>
    </li>
  ));
  return <ul className='folder-ul'>{folders}</ul>;
}

export default FolderList;
