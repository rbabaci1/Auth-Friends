import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='nav-bar'>
      <Link to='/'>
        <h1>Welcome Friends!</h1>
      </Link>

      <nav>
        <NavLink to='/login' activeClassName='active-link'>
          Login
        </NavLink>

        <NavLink to='/addFriend' activeClassName='active-link'>
          Add friend
        </NavLink>
      </nav>
    </div>
  );
}
