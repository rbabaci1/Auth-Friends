import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import axiosWithAuth from '../utils/axiosWithAuth';
import { withRouter } from 'react-router-dom';
import { newFriendInitialState } from '../initialStates';
import { SUCCESS, LOADING, ERROR } from '../reducer';

const AddFriend = ({ history, dispatch }) => {
  const [newFriend, setNewFriend] = useState(newFriendInitialState);

  const handleChange = (e) => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };

  const addNewFriend = (e) => {
    e.preventDefault();
    dispatch({ type: LOADING });

    axiosWithAuth
      .post('/friendss', newFriend)
      .then((res) => dispatch({ type: SUCCESS, payload: res.data }))
      .catch((err) => {
        dispatch({
          type: ERROR,
          payload: "Sorry, can't add a friend now. Please try later!",
        });
        console.error(err);
      });

    history.push('/friendsList');
  };

  return (
    <div className='form add-friend-form'>
      <MDBContainer>
        <MDBRow>
          <MDBCol md='6'>
            <form onSubmit={addNewFriend}>
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
