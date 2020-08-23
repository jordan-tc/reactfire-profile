import React, { useState, useContext } from 'react';
import { useAuth, useUser } from 'reactfire';
import { useHistory } from "react-router-dom";
import { AuthedContext } from './AuthedContext';
import firebase from 'firebase/app';

const Signup = () => {

  const auth = useAuth();
  const history = useHistory();
  const user = useUser();
  const [isAuthed, setIsAuthed] = useContext(AuthedContext);


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = async e => {
    e.preventDefault();
    e.persist();
    await auth.createUserWithEmailAndPassword(email, password).catch(e => console.log(e));
    await auth.signInWithEmailAndPassword(email, password);
    setIsAuthed(true);
    await auth.currentUser.updateProfile({
      displayName: e.target.firstname.value + " " + e.target.lastname.value
    });
    await auth.currentUser.sendEmailVerification({url: window.location.origin + '/'});
  };

  const signupWithGoogle = async (e) => {
    e.preventDefault();
    await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(e => console.log(e));
    setIsAuthed(true);
  }


  return (
    <div>
      <form onSubmit={signup} fallback={<h1>Testing...</h1>}>
        <h1>Sign Up</h1>
        <input type="text" name="firstname" placeholder="First Name" required/>
        <input type="text" name="lastname" placeholder="Last Name" required/>
        <input type='email' name='email' onChange={e => setEmail(e.target.value)} placeholder="Email" required/>
        <input type='password' name='password' onChange={e => setPassword(e.target.value)} placeholder="Password" required/>
        <button type="submit">Sign Up</button>
        <input type="button" value="Login with Google" onClick={e => signupWithGoogle(e)}/>
      </form>
    </div>
  );

};

export default Signup;