import React, { useState } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import AddFriend from './AddFriend';
import Home from './Home';
import loginContext from '../contexts/loginContext';
import { userLoginInitial } from '../initialStates';

export default function LandingPage() {
  const [userInput, setUserInput] = useState(userLoginInitial);

  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // user authentication
    console.log(JSON.stringify(userInput));
    setUserInput(userLoginInitial);
  };

  return (
    <div className='landing-page'>
      <loginContext.Provider value={{ isLoggedIn: userInput.isLoggedIn }}>
        <Navbar />
      </loginContext.Provider>

      <Route exact path='/' component={Home} />

      <loginContext.Provider value={{ userInput, handleChange, handleSubmit }}>
        <Route path='/login' component={Login} />
      </loginContext.Provider>

      {/* // private routes */}
      <Route path='/addFriend' component={AddFriend} />
    </div>
  );
}
