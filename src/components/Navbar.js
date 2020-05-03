import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import Spinner from './Spinner';

export default function Navbar({ location }) {
  const { loading, isLoggedIn, handleLogout } = useContext(UserContext);

  return (
    <div className='nav-bar'>
      {location.pathname === '/' || isLoggedIn ? (
        <h1 id='no-hover'>Welcome Friends!</h1>
      ) : (
        <Link to='/'>
          <h1>Welcome Friends!</h1>
        </Link>
      )}

      <nav>
        {isLoggedIn ? (
          <>
            <a href='/' onClick={handleLogout}>
              {loading && <Spinner action='logout' />} Log out
            </a>

            <NavLink to='/friendsList' activeClassName='active-link'>
              Friends
            </NavLink>

            <NavLink to='/friendsList/addFriend' activeClassName='active-link'>
              Add friend
            </NavLink>
          </>
        ) : (
          <NavLink to='/login' activeClassName='active-link'>
            Login
          </NavLink>
        )}
      </nav>
    </div>
  );
}
