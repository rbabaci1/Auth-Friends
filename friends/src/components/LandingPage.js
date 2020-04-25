import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { userLoginInitial } from '../initialStates';
import { setLoading, setError, setLoggedIn } from '../helpers';
import Navbar from './Navbar';
import Login from './Login';
import AddFriend from './AddFriend';
import Home from './Home';
import loginContext from '../contexts/loginContext';
import FriendsList from './FriendsList';
import PrivateFriends from '../PrivateRoutes/PrivateFriends';
import axiosWithAuth from '../utils/axiosWithAuth';

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

    setLoading(userInput, setUserInput);

    setTimeout(() => {
      axiosWithAuth
        .post('/login', userInput)
        .then((res) => {
          setLoggedIn(userLoginInitial, setUserInput);

          const token = res.data.payload;

          localStorage.setItem('token', token);
          history.push('/friendsList');
        })
        .catch((err) => {
          setError(userInput, setUserInput);
          console.error(err);
        });
    }, 1500);
  };

  return (
    <div className='landing-page'>
      <loginContext.Provider value={{ isLoggedIn: userInput.isLoggedIn }}>
        <Route component={Navbar} />
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
