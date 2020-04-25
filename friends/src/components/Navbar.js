import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import loginContext from '../contexts/loginContext';

export default function Navbar(props) {
  const { isLoggedIn } = useContext(loginContext);
  console.log(props);
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
          <NavLink to='/logout' activeClassName='active-link'>
            Log out
          </NavLink>
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
