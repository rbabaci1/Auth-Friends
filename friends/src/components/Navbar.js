import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='nav-bar'>
      <Link to='/'>
        <h1>Welcome Friends!</h1>
      </Link>

      <nav>
        <NavLink to='/login'>Login</NavLink>

        <NavLink to='/addFriend'>Add friend</NavLink>
      </nav>
    </div>
  );
}
