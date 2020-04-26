import React from 'react';

export default function FriendCard({ friend, loading }) {
  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div className='friend-card'>
          <div className='buttons'>
            <span id='delete'>X</span>
            <span id='edit'>edit</span>
          </div>

          <h3>
            Name:<span>{friend.name}</span>
          </h3>

          <h3>
            Age:<span>{friend.age}</span>
          </h3>

          <h3>
            Email:<span>{friend.email}</span>
          </h3>
        </div>
      )}
    </>
  );
}
