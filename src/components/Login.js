import React, { useContext, useState } from 'react';
import { useAuth } from 'reactfire';
import { useHistory } from "react-router-dom";
import firebase from 'firebase/app';
import { AuthedContext } from './AuthedContext';

const Login = () => {

  const auth = useAuth();
  const history = useHistory();
  const [isAuthed, setIsAuthed] = useContext(AuthedContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (e) => {
    e.preventDefault();
    await auth.signInWithEmailAndPassword(email, password).catch(e => console.log(e));
    setIsAuthed(true);
  }

  const loginWithGoogle = async (e) => {
    e.preventDefault();
    await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(e => console.log(e));
    setIsAuthed(true);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <input type='text' name='email' onChange={e => setEmail(e.target.value)}/>
        <input type='text' name='password' onChange={e => setPassword(e.target.value)}/>
        <input type="submit" value="Login"/>
        <button onClick={e => loginWithGoogle(e)}>Login with Google</button>
      </form>
    </div>
  );

};

export default Login;