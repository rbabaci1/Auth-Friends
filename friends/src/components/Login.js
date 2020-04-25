import React, { useContext } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import loginContext from '../contexts/loginContext';
import Spinner from './Spinner';

export default function Login({ history }) {
  const { userInput, handleChange, handleLogin } = useContext(loginContext);

  return (
    <div className='form'>
      <MDBContainer>
        <MDBRow>
          <MDBCol md='6'>
            <form onSubmit={(e) => handleLogin(e, history)}>
              <p className='h5 text-center mb-4'>Log in</p>

              <div className='grey-text'>
                <MDBInput
                  onChange={handleChange}
                  value={userInput.email}
                  name='email'
                  label='Type your email'
                  icon='envelope'
                  type='email'
                  required
                />

                <MDBInput
                  onChange={handleChange}
                  name='password'
                  value={userInput.password}
                  label='Type your password'
                  icon='lock'
                  type='password'
                  required
                />
              </div>

              <div className='text-center'>
                {userInput.loading && <Spinner />}

                <MDBBtn
                  type='submit'
                  className={userInput.loading ? 'hide' : ''}
                >
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
