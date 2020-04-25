import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';

export default function LandingPage() {
  return (
    <div className='landing-page'>
      <Navbar />

      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
    </div>
  );
}
