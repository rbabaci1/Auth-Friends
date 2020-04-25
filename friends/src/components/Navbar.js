import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import loginContext from '../contexts/loginContext';

export default function Navbar({ history }) {
  const { isLoggedIn, handleLogout } = useContext(loginContext);

  return (
    <div className='nav-bar'>
      {isLoggedIn ? (
        <h1 id='no-hover'>Welcome Friends!</h1>
      ) : (
        <Link to='/'>
          <h1>Welcome Friends!</h1>
        </Link>
      )}

      <nav>
        {isLoggedIn ? (
          <a href='#' onClick={(e) => handleLogout(e, history)}>
            Log out
          </a>
        ) : (
          <NavLink to='/login' activeClassName='active-link'>
            Login
          </NavLink>
        )}

        {isLoggedIn && (
          <NavLink to='/addFriend' activeClassName='active-link'>
            Add friend
          </NavLink>
        )}
      </nav>
    </div>
  );
}
