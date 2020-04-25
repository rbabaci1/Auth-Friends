import React from 'react';

const Spinner = ({ action }) => {
  return (
    <>
      {action === 'login' ? (
        <div className='spinner-border text-success' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      ) : (
        <div className='spinner-grow' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      )}
    </>
  );
};

export default Spinner;
