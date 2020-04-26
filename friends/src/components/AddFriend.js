import React, { useState, useContext } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { newFriendInitialState } from '../initialStates';
import FriendsContext from '../contexts/FriendsContext';
import { withRouter } from 'react-router-dom';

const AddFriend = ({ history }) => {
  const [newFriend, setNewFriend] = useState(newFriendInitialState);
  const addFriend = useContext(FriendsContext);

  const handleChange = (e) => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();

    addFriend(newFriend);
    history.push('/friendsList');
  };

  return (
    <div className='form'>
      <MDBContainer>
        <MDBRow>
          <MDBCol md='6'>
            <form onSubmit={handleAdd}>
              <p className='h4 text-center mb-4'>Add a friend</p>

              <div className='grey-text'>
                <MDBInput
                  onChange={handleChange}
                  value={newFriend.name}
                  name='name'
                  label='Name'
                  icon='user'
                  type='text'
                  required
                />

                <MDBInput
                  onChange={handleChange}
                  value={newFriend.email}
                  name='email'
                  label='Email'
                  icon='envelope'
                  type='email'
                  required
                />

                <MDBInput
                  onChange={handleChange}
                  value={newFriend.age}
                  name='age'
                  label='Age'
                  icon='beer'
                  type='number'
                  required
                />
              </div>

              <div className='text-center'>
                <MDBBtn type='submit'>Add</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default withRouter(AddFriend);
