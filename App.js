import React from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import Preview from "./Preview";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Chats from "./Chats";
import ChatView from "./ChatView";


function App() {
  return (
    <div className="App">
      <Router>
      <div classname="app__body">
        <Switch>
        <Route path="/Chats/view">
            <ChatView />
         </Route>
        <Route path="/Chats">
            <Chats />
         </Route>
          <Route exact  path="/Preview">
            <Preview />
         </Route>
          <Route exact  path="/">
          <WebcamCapture />
         </Route>
        </Switch>
      </div>
    </Router>
</div>
  );
}

export default App;
