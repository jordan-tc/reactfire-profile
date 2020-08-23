import React, { useContext, useState } from 'react';
import { useUser, useAuth } from 'reactfire';
import { AuthedContext } from './AuthedContext.js';

const ProfilePage = () => {

  const user = useUser(); 
  const auth = useAuth();
  const [isAuthed, setIsAuthed] = useContext(AuthedContext);
  const [verificationEmailSent, setVerificationEmailSent] = useState(false);

  const signOut = () => {
    setIsAuthed(false);
    auth.signOut();
  }

  const sendVerificationEmail = async () => {
    await auth.currentUser.sendEmailVerification();
    setVerificationEmailSent(true);
  }

  const updateProfile = async (e) => {
    
  }

  let verifyEmail = '';
  if(!user.emailVerified)
    verifyEmail = <a href="#" onClick={() => sendVerificationEmail()}>Verify Email</a>

  console.log(user);

  return (
    <div>
      <h1>Your Profile</h1>
      <input type='text' name="firstname" defaultValue={user.displayName.split(' ')[0]}/>
      <input type='text' name="lastname" defaultValue={user.displayName.split(' ')[1]}/>
      <input type='text' value={user.email}/>
      <button type="submit">Update Profile</button>
      <button onClick={() => signOut()}>Sign Out</button>
      {verifyEmail}
      {verificationEmailSent ? <span>Verification email sent.</span> : null}
      
    </div>
  );

};

export default ProfilePage;