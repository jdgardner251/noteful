import React, { useContext }from "react";
import { NavLink } from 'react-router-dom'
import "./FolderList.css";
import StoreContext from './storeContext'


function FolderList() {
  // const { folderId } = useParams();
  const { folders } = useContext(StoreContext)



  const folderItems = folders.map((folder) => (
    <li className="folder-list" key={folder.id}>
      <NavLink to={`/folder/${folder.id}`}>{folder.name}</NavLink>
    </li>
  ));
  return <ul className='folder-ul'>{folderItems}</ul>;
}


export default FolderList;
