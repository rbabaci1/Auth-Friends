import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateFriends({ component: Component, ...rest }) {
  const token = localStorage.getItem('token');

  return (
    <Route
      {...rest}
      render={() => (token ? <Component /> : <Redirect to='/login' />)}
    />
  );
}
