import React, { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { useLocalStorage } from 'react-use';
import { userInitialState } from '../initialStates';
import Navbar from './Navbar';
import LoginPage from './LoginPage';
import UserContext from '../contexts/UserContext';
import FriendsList from './FriendsList';
import PrivateRoute from '../PrivateRoutes/PrivateRoute';
import axiosWithAuth from '../utils/axiosWithAuth';

function LandingPage({ history }) {
  const [userInput, setUserInput] = useState(userInitialState);
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false);

  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setUserInput({ ...userInput, loading: true, error: '' });

    setTimeout(() => {
      axiosWithAuth()
        .post('/login', userInput)
        .then((res) => {
          const token = res.data.payload.token;

          setIsLoggedIn(true);
          setUserInput({ ...userInput, loading: false, error: '' });
          localStorage.setItem('token', token);
          history.push('/friendsList');
        })
        .catch((err) => {
          setUserInput({
            ...userInput,
            error: "That wasn't correct. Try again?",
          });
          console.error(err);
        });
    }, 1500);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setUserInput({ ...userInput, loading: true, error: '' });

    setTimeout(() => {
      setIsLoggedIn(false);
      setUserInput(userInitialState);
      localStorage.removeItem('token');
      history.push('/');
    }, 1200);
  };

  return (
    <div>
      <UserContext.Provider
        value={{
          loading: userInput.loading,
          isLoggedIn,
          handleLogout,
        }}
      >
        <Route component={Navbar} />
      </UserContext.Provider>

      <Route exact path='/' render={() => <div className='home'></div>} />

      <UserContext.Provider value={{ userInput, handleChange, handleLogin }}>
        <Route path='/login' component={LoginPage} />
      </UserContext.Provider>

      <PrivateRoute path='/friendsList' component={FriendsList} />
    </div>
  );
}

export default withRouter(LandingPage);
