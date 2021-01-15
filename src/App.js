import React, { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/appSlice';
import Login from './Components/Login';
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch()

    //keep user login once it is login
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => { 
      if(authUser){
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid,
        }))
      } else {
        dispatch(logout())
      }
    })
  },[])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ): (
          <>
          <img 
          src="https://img.etimg.com/thumb/width-640,height-480,imgsize-131476,resizemode-1,msid-76333036/magazines/panache/snapchat-to-add-wellness-features-on-the-app-will-help-users-deal-with-stress-anxiety-and-emotional-issues/snap-said-it-was-working-to-curb-the-stress-and-anxiety-which-plagues-social-networks-which-offer-a-platform-for-user-content-.jpg"
          alt=""
          className="app__logo"
          />
          <div className='app__body'>
            <div className="app__bodyBackground">
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
          </div>
          </>
        )}

      </Router>
    </div>
  );
}

export default App;
