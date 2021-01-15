import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/appSlice';
import { auth, provider } from '../firebase';
import './Login.css';

function Login() {

    const dispatch = useDispatch()

    const signIn =()=>{
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch(login({
                username: result.user.displayName,
                profilePic: result.user.photoURL,
                id: result.user.uid,
              })
           )
        })
    }
    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://img.etimg.com/thumb/width-640,height-480,imgsize-131476,resizemode-1,msid-76333036/magazines/panache/snapchat-to-add-wellness-features-on-the-app-will-help-users-deal-with-stress-anxiety-and-emotional-issues/snap-said-it-was-working-to-curb-the-stress-and-anxiety-which-plagues-social-networks-which-offer-a-platform-for-user-content-.jpg" alt=""/>
                <Button variant='outlined' onClick={signIn}>
                    Sign in
                </Button>
            </div>
        </div>
    )
}

export default Login
