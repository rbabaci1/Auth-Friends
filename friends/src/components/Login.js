import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

export default function Login() {
  return (
    <div className='sign-in'>
      <MDBContainer>
        <MDBRow>
          <MDBCol md='6'>
            <form>
              <p className='h5 text-center mb-4'>Sign in</p>

              <div className='grey-text'>
                <MDBInput
                  label='Type your email'
                  icon='envelope'
                  group
                  type='email'
                  error='wrong'
                  success='yeah!!'
                  required
                />

                <MDBInput
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
