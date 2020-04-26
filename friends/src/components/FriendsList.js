import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import { MDBIcon } from 'mdbreact';
import { FriendsInitialState } from '../initialStates';
import FriendCard from './FriendCard';

export default function FriendsList() {
  const [friendsList, setFriendsList] = useState(FriendsInitialState);

  useEffect(() => {
    setFriendsList({ ...friendsList, loading: true });

    axiosWithAuth
      .get('/friends')
      .then((res) => {
        setFriendsList({
          ...friendsList,
          friends: res.data,
          loading: false,
          error: '',
        });
      })
      .catch((err) => {
        setFriendsList({
          ...friendsList,
          error: 'Loading error, please try again in a few.',
        });
        console.error(err);
      });
  }, []);

  return (
    <div className='friends-list-wrapper'>
      <Link to='/'>
        {/* <MDBIcon icon='arrow-left' /> */}
        <MDBIcon icon='home' />
      </Link>

      <h1>You are logged In!</h1>

      <div className='friends-list'>
        {friendsList.friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
}
