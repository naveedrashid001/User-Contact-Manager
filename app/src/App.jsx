import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/contact';
import LeftSidemenu from './pages/leftSidemenu';
import NoContant from './pages/NoContant';

function App() {
  return (
    <BrowserRouter>
      <div style={{ textAlign: 'center' }}>
        <h1>User Contact Manager</h1>
      </div>

      <div style={{ display: 'flex' }}>
        <div style={{ width: '25%', borderRight: '1px solid #ccc', padding: '10px' }}>
          <LeftSidemenu />
        </div>

        <div style={{ width: '75%', padding: '10px' }}>
          <Routes>
            <Route path="/" element={<Contact />} />
            <Route path="/nocontact" element={<NoContant />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
