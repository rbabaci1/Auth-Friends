import React, { useEffect, useCallback, useReducer } from 'react';
import { Link, Route } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import { MDBIcon } from 'mdbreact';
import { friendsInitialState } from '../initialStates';
import FriendCard from './FriendCard';
import AddFriend from './AddFriend';
import friendsReducer, { LOADING, SUCCESS, ERROR } from '../reducer';

export default function FriendsList() {
  const [state, dispatch] = useReducer(friendsReducer, friendsInitialState);
  const { friends, loading, error } = state;

  const getData = useCallback(() => {
    dispatch({ type: LOADING });

    axiosWithAuth
      .get('/friends')
      .then((res) => {
        dispatch({ type: SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: ERROR,
          payload: 'Loading error, please try again in a few.',
        });
        console.error(err);
      });
  }, [dispatch]);

  useEffect(() => {
    getData();
  }, [getData]);

  const removeFriend = (friendId) => {
    axiosWithAuth
      .delete(`/friends/${friendId}`)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <div className='friends-list-wrapper'>
      <Link to='/'>
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
        <>
          <Route
            path='/friendsList/addFriend'
            render={(props) => <AddFriend {...props} dispatch={dispatch} />}
          />

          <div className='friends-list'>
            {friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
