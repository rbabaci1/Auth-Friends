import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import { MDBIcon } from 'mdbreact';
import FriendsContext from '../contexts/FriendsContext';
import { FriendsInitialState } from '../initialStates';

export default function FriendsList() {
  const [FriendsList, setFriendsList] = useState(FriendsInitialState);

  return (
    <div className='friends-list'>
      <Link to='/'>
        {/* <MDBIcon icon='arrow-left' /> */}
        <MDBIcon icon='home' />
      </Link>

      <h1>You are logged In!</h1>
    </div>
  );
}
