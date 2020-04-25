import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';

export default function LandingPage() {
  return (
    <div className='landing-page'>
      <Navbar />

      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
    </div>
  );
}
