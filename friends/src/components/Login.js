import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const initialState = {
  email: '',
  password: '',
};

export default function Login() {
  const [userInput, setUserInput] = useState(initialState);

  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='sign-in'>
      <MDBContainer>
        <MDBRow>
          <MDBCol md='6'>
            <form>
              <p className='h5 text-center mb-4'>Sign in</p>

              <div className='grey-text'>
                <MDBInput
                  onChange={handleChange}
                  name='email'
                  label='Type your email'
                  icon='envelope'
                  group
                  type='email'
                  success='yeah!!'
                  required
                />

                <MDBInput
                  onChange={handleChange}
                  name='password'
                  label='Type your password'
                  icon='lock'
                  group
                  type='password'
                  required
                />
              </div>

              <div className='text-center'>
                <MDBBtn type='submit'>Login</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
