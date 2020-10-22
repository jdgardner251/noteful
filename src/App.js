import React from "react";
import { Route, useParams, withRouter } from "react-router-dom";
import Sidebar from "./Sidebar";
import Main from "./Main";
import FolderList from "./FolderList";
import AddFolder from "./AddFolder";
import NoteSidebar from "./NoteSidebar";
import NoteList from "./NoteList";
import NoteDetail from "./NoteDetail";
import "./App.css";
import Header from "./Header";
import store from "./store";

function App(props) {
  return (
    <main className="App">
      <>
        <Header />
        <div className='flex-container'>
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
            <NoteList notes={props.store.notes} />
          </Route>
          <Route path="/folder/:folderId">
            <NoteList notes={props.store.notes} />
          </Route>
        
          <Route
            path="/note/:noteId"
            render={(routerProps) => (
              <NoteDetail
                note={props.store.notes.find(
                  (note) => note.id === routerProps.match.params.noteId
                )}
              />
            )}
          />
        </Main>
        </div>
      </>
    </main>
  );
}

export default withRouter(App);
