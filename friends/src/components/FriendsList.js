import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import { MDBIcon } from 'mdbreact';
import FriendsContext from '../contexts/FriendsContext';
import { FriendsInitialState } from '../initialStates';
import FriendCard from './FriendCard';

export default function FriendsList() {
  const [friendsList, setFriendsList] = useState(FriendsInitialState);
  const { friends, loading, error } = friendsList;

  const getData = useCallback(() => {
    setFriendsList((friendsList) => ({ ...friendsList, loading: true }));

    axiosWithAuth
      .get('/friends')
      .then((res) => {
        setFriendsList((friendsList) => ({
          ...friendsList,
          friends: res.data,
          loading: false,
          error: '',
        }));
      })
      .catch((err) => {
        setFriendsList((friendsList) => ({
          ...friendsList,
          error: 'Loading error, please try again in a few.',
        }));
        console.error(err);
      });
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const addFriend = (friend) => {
    axiosWithAuth
      .post('/friends', friend)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className='friends-list-wrapper'>
      <Link to='/'>
        {/* <MDBIcon icon='arrow-left' /> */}
        <MDBIcon icon='home' />
      </Link>

      {error && (
        <div className='message-wrapper'>
          <div className='message message-alert'>{error}</div>
        </div>
      )}

      {!error && (
        <header>
          <h1>These are all you friends!</h1>
        </header>
      )}

      {loading && !error ? (
        <h1>loading...</h1>
      ) : (
        <div className='friends-list'>
          {friends.map((friend) => (
            <FriendsContext.Provider key={friend.id} value={addFriend}>
              <FriendCard friend={friend} />
            </FriendsContext.Provider>
          ))}
        </div>
      )}
    </div>
  );
}
