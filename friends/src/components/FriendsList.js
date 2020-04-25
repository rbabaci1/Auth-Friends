import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { MDBIcon } from 'mdbreact';

export default function FriendsList() {
  // problem on page refresh
  return (
    <div>
      {/* <MDBIcon icon='arrow-left' onClick={() => <Redirect path='/' />} /> */}

      <h1>You are logged In!</h1>
    </div>
  );
}
