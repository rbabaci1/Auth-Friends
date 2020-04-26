import React, { useState, useContext } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { newFriendInitialState } from '../initialStates';
import FriendsContext from '../contexts/FriendsContext';

const AddFriend = () => {
  const [newFriend, setNewFriend] = useState(newFriendInitialState);
  const { addFriend } = useContext(FriendsContext);

  const handleAdd = (e) => {
    e.preventDefault();

    addFriend();
  };

  return (
    <div className='form'>
      <MDBContainer>
        <MDBRow>
          <MDBCol md='6'>
            <form onSubmit={handleAdd}>
              <p className='h4 text-center mb-4'>Add a friend</p>

              <div className='grey-text'>
                <MDBInput label='Name' icon='user' group type='text' required />

                <MDBInput label='Email' icon='envelope' type='email' required />

                <MDBInput label='Age' icon='beer' type='number' required />
              </div>

              <div className='text-center'>
                <MDBBtn type='submit'>Register</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default AddFriend;
