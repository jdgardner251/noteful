import React, { useState, useContext } from "react";
import StoreContext from "./storeContext";
import PropTypes from 'prop-types'

const AddNote = ({ folders }) => {
  const [click, setClick] = useState(false);
  const [noteItem, setNoteItem] = useState({ 
      name: '',
      modified: 'Now',
      folderId: '',
      content: '' 
 });

 const { addNote } = useContext(StoreContext)

  const updateClick = () => {
    setClick(true);
  };

  const updateNoteItemName = (input) => {
      setNoteItem({ ...noteItem, name: input })
      console.log(noteItem.name)
  }

  const updateNoteItemContent = (input) => {
      setNoteItem({ ...noteItem, content: input})
      console.log(noteItem.content)
  }

  const updateNoteItemFolderID = (input) => {
      console.log(input)
      setNoteItem({...noteItem, folderId: input})
  }

  const validateName = () => {
          return 'Name is Required'
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e);
        fetch(`http://localhost:9090/notes`, {
        method: "POST",
        body: JSON.stringify(noteItem), //what do I send in here?
        headers: {
          "Content-Type": "application/json",
    }
    })
        .then((res) => {
            if (!res.ok) {
            throw new Error(res.statusText);
            }
            return res.json();
        })
        .then((data) => {
            addNote(data)
            setClick(false)
        })
        .catch((error) => {
            console.log(error);
          });   
        };

  const folderItems = folders.map((folder) => (
    <option value={folder.id} key={folder.id} id={folder.id}>
      {folder.name}
    </option>
  ))

  return (
    <div>
      <button onClick={() => updateClick()}>Add Note</button>
      {click && (
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="name">Note Name</label>
          <input
            onChange={(e) => updateNoteItemName(e.target.value)}
            type="text"
            name="name"
            id="name"
          ></input>
          {(noteItem.name.length === 0) && <div>{validateName()}</div>}
          <label htmlFor="content">Content</label>
          <input
            onChange={(e) => updateNoteItemContent(e.target.value)}
            type="text"
            name="content"
            id="content"
          ></input>
          <label htmlFor="folder">Select Folder:</label>
          <select onChange={(e) => updateNoteItemFolderID(e.target.value)} id='folder' name='folder' >
            {folderItems}
          </select>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

AddNote.propTypes = {
  folders: PropTypes.array.isRequired
}

export default AddNote;
