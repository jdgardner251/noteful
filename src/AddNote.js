import React, { useState } from "react";

const AddNote = (props) => {
  const [click, setClick] = useState({ clicked: false });
  const [noteItem, setNoteItem] = useState({ 
      name: '',
      modified: 'Now',
      folderId: '',
      content: '' 
 });

  const updateClick = () => {
    setClick({ clicked: true });
  };

  const updateNoteItemName = (input) => {
      setNoteItem({ name: input })
      console.log(noteItem.name)
  }

  const updateNoteItemContent = (input) => {
      setNoteItem({ content: input})
      console.log(noteItem.content)
  }

  const updateNoteItemFolderID = (input) => {
      console.log(input)
      setNoteItem({folderId: input})
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
        .then((data) => console.log("success:", data));   
        };

  const folderItems = props.folders.map((folder) => (
    <option key={folder.id} id={folder.id}>
      {folder.name}
    </option>
  ))

  return (
    <div>
      <button onClick={() => updateClick()}>Add Note</button>
      {click.clicked && (
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="name">Note Name</label>
          <input
            onChange={(e) => updateNoteItemName(e.target.value)}
            type="text"
            name="name"
            id="name"
          ></input>
          <label htmlFor="content">Content</label>
          <input
            onChange={(e) => updateNoteItemContent(e.target.value)}
            type="text"
            name="content"
            id="content"
          ></input>
          <label htmlFor="folder">Select Folder:</label>
          <select onChange={(e) => updateNoteItemFolderID(e)} id='folder' name='folder' >
            {folderItems}
          </select>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default AddNote;
