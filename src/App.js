import React from "react";
import { Route, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import Main from "./Main";
import FolderList from "./FolderList";
import AddFolder from "./AddFolder";
import NoteSidebar from "./NoteSidebar";
import NoteList from "./NoteList";
import NoteDetail from "./NoteDetail";
import "./App.css";
import Header from "./Header";

function App(props) {
const folderId = useParams();
const noteListFull = props.store.notes
const noteListData = props.store.notes.filter(note => note.id === folderId)

  return (
    <main className="App">
      <>
        <Header />
        <Sidebar>
          <Route exact path="/">
            <>
              <FolderList store={props.store} />
              <AddFolder />
            </>
          </Route>
          <Route path="/folder/:folderId">
            <>
              <FolderList store={props.store} />
              <AddFolder />
            </>
          </Route>
          <Route path="/note/:noteId">
            <NoteSidebar />
          </Route>
        </Sidebar>
        <Main>
          <Route exact path="/">
            <NoteList notes={noteListFull} />
          </Route>
          <Route path="/folder/:folderId">
            <NoteList notes={noteListData} />
          </Route>
          <Route path="/note/:noteId">
            <NoteDetail />
          </Route>
        </Main>
      </>
    </main>
  );
}

export default App;
