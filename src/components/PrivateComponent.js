import React, { useContext } from 'react';
import { AuthedContext } from './AuthedContext.js';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ redirectPath, authNeeded, children, ...rest }) {
  
  const [isAuthed, setIsAuthed] = useContext(AuthedContext);
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        (!isAuthed && !authNeeded) || (isAuthed && authNeeded) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: redirectPath,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;