import React from 'react'
import './FolderList.css'

function FolderList(props) {
    console.log(props)
    const folders = props.store.folders.map(folder => 
        <li key={folder.id}>
            {folder.name}
        </li>
    )
    return (
        <ul className='folder-list'>
            {folders}
        </ul>
    )
}

export default FolderList;