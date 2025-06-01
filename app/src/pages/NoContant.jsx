import React from 'react';
import { useNavigate } from 'react-router-dom';

function NoContant() {
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center p-4 mx-auto" style={{ maxWidth: '600px' }}>
        <div
          className="border rounded-circle border-danger d-flex justify-content-center align-items-center mb-4"
          style={{ width: '150px', height: '150px', fontSize: '5rem', color: '#dc3545', fontWeight: '700' }}
        >
          204
        </div>
        <h1 className="display-4 fw-bold mb-3" style={{ color: '#343a40' }}>
          No Contact Found
        </h1>
        <p className="lead text-muted mb-4" style={{ maxWidth: '400px' }}>
          Sorry, there are currently no contacts to display. Please try adding new contacts or check back later.
        </p>
        <button
          className="btn btn-danger btn-lg px-4"
          onClick={() => navigate('/')} // Change '/' if you want to navigate elsewhere
        >
          Go Back Home
        </button>
      </div>
    </>
  );
}

export default NoContant;
