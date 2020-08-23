import { createContext, useState, Suspense } from 'react';
import React from 'react';
import { useUser } from 'reactfire';

export const AuthedContext = createContext();

const AuthedProvider = props => {


  const [isAuthed, setIsAuthed] = useState(useUser() ? true : false);

  return (
    <AuthedContext.Provider value={[isAuthed, setIsAuthed]}>
      {props.children}
    </AuthedContext.Provider>
  );

};

export default AuthedProvider;