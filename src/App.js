import React from "react";
import { Route } from "react-router-dom";
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
          <Route path="/folder/:folder-id">
            <>
              <FolderList />
              <AddFolder />
            </>
          </Route>
          <Route path="/note/:note-id">
            <NoteSidebar />
          </Route>
        </Sidebar>
        <Main>
          <Route exact path="/">
            <NoteList store={props.store} />
          </Route>
          <Route path="/folder/:folder-id">
            <NoteList />
          </Route>
          <Route path="/note/:note-id">
            <NoteDetail />
          </Route>
        </Main>
      </>
    </main>
  );
}

export default App;
