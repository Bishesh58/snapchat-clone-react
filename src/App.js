import React from 'react';
import './App.css';
import WebcamCapture from './Components/WebcamCapture';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <div className='app__body'>
          <Switch>
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
