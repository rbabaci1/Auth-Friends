import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateFriends({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={() =>
        localStorage.getItem('token') ? <Component /> : <Redirect to='/login' />
      }
    />
  );
}
