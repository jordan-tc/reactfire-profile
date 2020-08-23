import React, { useContext } from 'react';
import { useAuth, useUser } from 'reactfire';
import { AuthedContext } from './AuthedContext';

const Home = () => {

  const user = useUser();
  const auth = useAuth();
  const [isAuthed, setIsAuthed] = useContext(AuthedContext);

  return (
      (user) ? (
        <div>
          <h1>Hello, {user.displayName}</h1>
        </div>
      ) : (
        <h1>Welcome!</h1>
      )
  )
}

export default Home;