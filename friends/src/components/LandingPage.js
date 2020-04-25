import React from 'react';
import { NavLink } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className='landing-page'>
      <NavLink to='/'>
        <h1>Welcome Friends!</h1>
      </NavLink>

      <nav>
        <NavLink to='/login'>Login</NavLink>

        <NavLink to='/signup'>Signup</NavLink>
      </nav>
    </div>
  );
}
