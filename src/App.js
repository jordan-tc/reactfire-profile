import React, { useState, useContext, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Home from './components/Home.js';
import PrivateRoute from './components/PrivateComponent.js';
import AuthedProvider from './components/AuthedContext';
import Nav from './components/Nav.js';
import ProfilePage from './components/ProfilePage.js';


function App() {

  

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <AuthedProvider>
        <Router>
          <div className="App">
            <Nav/>

            <Switch>
              <PrivateRoute redirectPath="/" path="/signup" authNeeded={false}>
                <Signup/>
              </PrivateRoute>
              <PrivateRoute redirectPath="/" path="/login" authNeeded={false}>
                <Login/>
              </PrivateRoute>
              <PrivateRoute redirectPath="/" path="/profile" authNeeded={true}>
                <ProfilePage/>
              </PrivateRoute>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
          </div>
        </Router>
      </AuthedProvider>
    </Suspense>
  );
}

export default App;
