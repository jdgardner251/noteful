import React, { useContext }from "react";
import { NavLink, useParams } from 'react-router-dom'
import "./FolderList.css";
import StoreContext from './storeContext'
import PropTypes from 'prop-types'

function FolderList() {
  const { folderId } = useParams();
  const { folders } = useContext(StoreContext)



  const folderItems = folders.map((folder) => (
    <li className="folder-list" key={folder.id}>
      <NavLink to={`/folder/${folder.id}`}>{folder.name}</NavLink>
    </li>
  ));
  return <ul className='folder-ul'>{folderItems}</ul>;
}


export default FolderList;
