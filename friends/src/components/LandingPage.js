import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { userLoginInitial } from '../initialStates';
import Navbar from './Navbar';
import Login from './Login';
import AddFriend from './AddFriend';
import Home from './Home';
import loginContext from '../contexts/loginContext';
import FriendsList from './FriendsList';
import PrivateFriends from '../PrivateRoutes/PrivateFriends';

export default function LandingPage() {
  const [userInput, setUserInput] = useState(userLoginInitial);

  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = (e, history) => {
    e.preventDefault();

    setUserInput({
      ...setUserInput,
      loading: true,
    });

    // user authentication
    // console.log(JSON.stringify(userInput));
    setTimeout(() => {
      setUserInput({
        ...setUserInput,
        loading: false,
      });
      history.push('/friendsList');
    }, 2000);
    // setUserInput(userLoginInitial);
  };

  return (
    <div className='landing-page'>
      <loginContext.Provider value={{ isLoggedIn: userInput.isLoggedIn }}>
        <Navbar />
      </loginContext.Provider>

      <Route exact path='/' component={Home} />

      <loginContext.Provider value={{ userInput, handleChange, handleLogin }}>
        <Route path='/login' component={Login} />
      </loginContext.Provider>

      {/* // private routes */}
      <PrivateFriends exact path='/friendsList' component={FriendsList} />

      <Route path='/addFriend' component={AddFriend} />
    </div>
  );
}
