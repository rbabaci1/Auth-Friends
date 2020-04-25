import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { userInitialState } from '../initialStates';
import { setLoading, setError, setLoggedIn, setLoggedOut } from '../helpers';
import Navbar from './Navbar';
import Login from './Login';
import AddFriend from './AddFriend';
import Home from './Home';
import loginContext from '../contexts/loginContext';
import FriendsList from './FriendsList';
import PrivateRoute from '../PrivateRoutes/PrivateRoute';
import axiosWithAuth from '../utils/axiosWithAuth';

export default function LandingPage() {
  const [userInput, setUserInput] = useState(userInitialState);

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
          setLoggedIn(userInitialState, setUserInput);

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

  const handleLogout = (e, history) => {
    e.preventDefault();
    setLoading(userInput, setUserInput);

    setTimeout(() => {
      setLoggedOut(userInitialState, setUserInput);

      localStorage.removeItem('token');
      history.push('/');
    }, 1000);
  };

  return (
    <div className='landing-page'>
      <loginContext.Provider
        value={{
          loading: userInput.loading,
          isLoggedIn: userInput.isLoggedIn,
          handleLogout,
        }}
      >
        <Route component={Navbar} />
      </loginContext.Provider>

      <Route exact path='/' component={Home} />

      <loginContext.Provider value={{ userInput, handleChange, handleLogin }}>
        <Route path='/login' component={Login} />
      </loginContext.Provider>

      {/* // private routes */}
      <PrivateRoute path='/friendsList' component={FriendsList} />
      <PrivateRoute path='/addFriend' component={AddFriend} />
    </div>
  );
}
