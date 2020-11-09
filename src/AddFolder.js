import React, { useState, useContext } from "react";
import StoreContext from "./storeContext";

const AddFolder = () => {
  const [click, setClick] = useState(false);
  const [folderName, setFolderName] = useState({ name: "" });

  const { addFolder } = useContext(StoreContext)

  const updateClick = () => {
    setClick(true);
  };

  const updateFolderName = (input) => {
    setFolderName({ name: input });
    console.log(folderName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:9090/folders`, {
      method: "POST",
      body: JSON.stringify(folderName),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
          addFolder(data)
          setClick(false)
        
        })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={() => updateClick()}>Add Folder</button>
      {click && (
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="name">Folder Name</label>
          <input
            onChange={(e) => updateFolderName(e.target.value)}
            type="text"
            name="name"
            id="name"
          ></input>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default AddFolder;
