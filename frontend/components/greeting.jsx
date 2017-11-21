import React from 'react';
import { Link } from 'react-router-dom';

const signedIn = (currentUser, logout) => (
  <hgroup>
    <h2>Hello, {currentUser.username}</h2>
    <button onClick={logout}>Log Out</button>
  </hgroup>
);
const loggedOut = () => (
  <nav>
    <Link to="/login">Login</Link>
    <Link to="/signup">Signup</Link>
  </nav>
);


const Greeting = ({ currentUser, logout }) => (
  currentUser ? signedIn(currentUser, logout) : loggedOut()
);

export default Greeting;
