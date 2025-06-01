import React from 'react';
import { useNavigate } from 'react-router-dom';

function LeftSidemenu() {
  const navigate = useNavigate();

  // Menu items to display
  const menuItems = [
    "Tags",
    "Score",
    "Star Value",
    "Owner",
    "Created Date",
    "Domain",
    "Last login",
    "Compony Size"
  ];

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ fontWeight: "bold" }}>Filter Contact</p>
        <p>Clear All</p>
      </div>

      {menuItems.map((item, index) => (
        <div key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
          <p>{item}</p>
          <i
            className="bi bi-plus"
            style={{ cursor: "pointer", fontSize: "20px" }}
            onClick={() => navigate('/nocontact')}
          ></i>
        </div>
      ))}
    </>
  );
}

export default LeftSidemenu;
