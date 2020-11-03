import React, { useState } from "react";

const AddFolder = () => {
  const [click, setClick] = useState({ clicked: false });
  const [folderName, setFolderName] = useState('')

  const updateClick = () => {
    setClick({ clicked: true })
}

const updateFolderName = (input) => {
    setFolderName(input)
    console.log(folderName)
}

const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:9090/folders`, {
        method: 'POST',
        body: JSON.stringify({
            name: folderName
        })
}
        .then((res) => {
            if (!res.ok) {
                throw new Error(res.statusText)
            }
            return res.json();
        })
        .then(data => console.log('success:', data))
    )}



  return (
    <div>
      <button onClick={() => updateClick()}>Add Folder</button>
      {click.clicked && (
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="name">Folder Name</label>
          <input onChange={(e) => updateFolderName(e.target.value)} type="text" name="name" id="name"></input>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default AddFolder;
