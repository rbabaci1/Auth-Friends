import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import axiosWithAuth from '../utils/axiosWithAuth';
import { newFriendInitialState } from '../initialStates';
import { SUCCESS, LOADING, ERROR } from '../reducer';

const AddFriend = ({ dispatch, history, location }) => {
  const [newFriend, setNewFriend] = useState(newFriendInitialState);
  const friendToEdit = location.state;

  useEffect(() => {
    setNewFriend(() => (friendToEdit ? friendToEdit : newFriendInitialState));
  }, [friendToEdit]);

  const handleChange = (e) => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: LOADING });

    if (friendToEdit) {
      axiosWithAuth()
        .put(`/friends/${friendToEdit.id}`, newFriend)
        .then((res) => dispatch({ type: SUCCESS, payload: res.data }))
        .catch((err) => {
          dispatch({
            type: ERROR,
            payload: "Sorry, can't edit this friend now. Please try later!",
          });
          console.error(err);
        });
    } else {
      axiosWithAuth()
        .post('/friends', newFriend)
        .then((res) => dispatch({ type: SUCCESS, payload: res.data }))
        .catch((err) => {
          dispatch({
            type: ERROR,
            payload: "Sorry, can't add a friend now. Please try later!",
          });
          console.error(err);
        });
    }

    history.push('/friendsList');
  };

  return (
    <div className='form add-friend-form'>
      <MDBContainer>
        <MDBRow>
          <MDBCol md='6'>
            <form onSubmit={handleSubmit}>
              <p className='h4 text-center mb-4'>
                {friendToEdit ? 'Update friend' : 'Add a friend'}
              </p>

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
                <MDBBtn type='submit'>{friendToEdit ? 'Update' : 'Add'}</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
export default AddFriend;
