import React, { useContext } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import UserContext from '../contexts/UserContext';
import Spinner from './Spinner';

export default function LoginPage() {
  const { userInput, handleChange, handleLogin } = useContext(UserContext);
  const { username, password, loading, error } = userInput;

  return (
    <div className='form'>
      {userInput.error && (
        <div className='message-wrapper'>
          <div className='message message-alert'>{error}</div>
        </div>
      )}

      <MDBContainer>
        <MDBRow>
          <MDBCol md='6'>
            <form onSubmit={handleLogin}>
              <p className='h4 text-center mb-4'>Log in</p>

              <div className='grey-text'>
                <MDBInput
                  onChange={handleChange}
                  value={username}
                  name='username'
                  label='Type your username'
                  icon='user-circle'
                  type='text'
                  required
                />

                <MDBInput
                  onChange={handleChange}
                  name='password'
                  value={password}
                  label='Type your password'
                  icon='lock'
                  type='password'
                  required
                />
              </div>

              <div className='text-center'>
                {loading && <Spinner action='login' />}

                <MDBBtn type='submit' className={loading ? 'hide' : ''}>
                  Login
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
