import React from 'react';

export default React.memo(function FriendCard({ friend, removeFriend }) {
  return (
    <div className='friend-card'>
      <div className='buttons'>
        <span id='delete' onClick={() => removeFriend(friend.id)}>
          X
        </span>
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
  );
});
