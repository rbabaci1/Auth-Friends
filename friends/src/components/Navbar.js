import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import loginContext from '../contexts/loginContext';

export default function Navbar() {
  const { isLoggedIn } = useContext(loginContext);

  return (
    <div className='nav-bar'>
      <Link to='/'>
        <h1>Welcome Friends!</h1>
      </Link>

      <nav>
        <NavLink to='/login' activeClassName='active-link'>
          Login
        </NavLink>

        {isLoggedIn && (
          <NavLink to='/addFriend' activeClassName='active-link'>
            Add friend
          </NavLink>
        )}
      </nav>
    </div>
  );
}
