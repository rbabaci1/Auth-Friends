import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

const Signup = () => {
  return (
    <div className='form'>
      <MDBContainer>
        <MDBRow>
          <MDBCol md='6'>
            <form>
              <p className='h5 text-center mb-4'>Add a friend</p>

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

export default Signup;