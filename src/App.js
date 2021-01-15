import React from 'react';
import './App.css';
import WebcamCapture from './Components/WebcamCapture';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Preview from './Components/Preview';
import Chats from './Components/Chats';
import ChatView from './Components/ChatView';

function App() {
  return (
    <div className="app">
      <Router>
        <div className='app__body'>
          <Switch>
          <Route path="/chats/view">
                <ChatView />
            </Route>
            <Route path="/chats">
                <Chats />
            </Route>
            <Route path="/preview">
              <Preview />
            </Route>
            <Route exact path="/">
              <WebcamCapture />
            </Route>
          </Switch>
        </div>
    </Router>
    </div>
  );
}

export default App;
