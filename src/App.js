import React, { useState, useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import Sidebar from "./Sidebar";
import Main from "./Main";
import FolderList from "./FolderList";
import AddFolder from "./AddFolder";
import NoteSidebar from "./NoteSidebar";
import NoteList from "./NoteList";
import NoteDetail from "./NoteDetail";
import "./App.css";
import Header from "./Header";
import StoreContext from "./storeContext";

function App(props) {
  const [folders, setFolders] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch(`http://localhost:9090/folders`).then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      }),
      fetch(`http://localhost:9090/notes`).then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      }),
    ])
      .then(([folders, notes]) => {
        setFolders(folders);
        setNotes(notes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="App">
      <>
        <StoreContext.Provider value={{ folders, notes }}>
          <Header />
          <div className="flex-container">
            <Sidebar>
              <Route exact path="/">
                <>
                  <FolderList />
                  <AddFolder />
                </>
              </Route>
              <Route path="/folder/:folderId">
                <>
                  <FolderList />
                  <AddFolder />
                </>
              </Route>
              <Route path="/note/:noteId">
                <NoteSidebar />
              </Route>
            </Sidebar>
            <Main>
              <Route exact path="/">
                <NoteList />
              </Route>
              <Route path="/folder/:folderId">
                <NoteList />
              </Route>

              <Route
                path="/note/:noteId"
                render={(routerProps) => (
                  <NoteDetail
                    note={notes.find(
                      (note) => note.id === routerProps.match.params.noteId
                    )}
                  />
                )}
              />
            </Main>
          </div>
        </StoreContext.Provider>
      </>
    </main>
  );
}

export default withRouter(App);
