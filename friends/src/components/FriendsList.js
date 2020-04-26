import React from 'react';
import { Route, Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import { MDBIcon } from 'mdbreact';

export default function FriendsList() {
  return (
    <div className='friends-list'>
      <Link to='/'>
        <MDBIcon icon='home' />
      </Link>

      <h1>You are logged In!</h1>
    </div>
  );
}
