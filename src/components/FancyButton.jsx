import React from "react";
import "../styles/FancyButton.css"; 

const FancyButton = ({ navigation = ()=>{},children }) => {
  return (
    <button className="btn" onClick={navigation}>
      <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
        <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
        <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
      </svg>
      <span>{children}</span>
    </button>
  );
};

export default FancyButton;
