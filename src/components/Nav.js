import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthedContext } from './AuthedContext.js'
import { useAuth } from 'reactfire';


const Nav = () => {

  const [isAuthed, setIsAuthed] = useContext(AuthedContext);

  const auth = useAuth();

  const signOut = () => {
    setIsAuthed(false);
    auth.signOut();
  }

  return (
      (!isAuthed) ? (
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
        </nav>
      ) : (
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/' onClick={() => signOut()}>Sign Out</Link>
        </nav>
      )
  );

};

export default Nav;