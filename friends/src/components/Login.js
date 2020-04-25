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
  const handleSubmit = (e) => {
    e.preventDefault();

    // user authentication
    console.log(JSON.stringify(userInput));
    setUserInput(initialState);
  };

  return (
    <div className='form'>
      <MDBContainer>
        <MDBRow>
          <MDBCol md='6'>
            <form onSubmit={handleSubmit}>
              <p className='h5 text-center mb-4'>Sign in</p>

              <div className='grey-text'>
                <MDBInput
                  onChange={handleChange}
                  value={userInput.email}
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
                  value={userInput.password}
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
