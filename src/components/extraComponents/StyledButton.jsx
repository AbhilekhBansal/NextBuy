import React, { useState } from "react";
import "./styledButton.css";

const StyledButton = ({ title = "Shop Now" }) => {
  return (
    <div className="flex justify-center ">
      <div className="styled-Button ">
        <button className="btn">
          <span></span>
          <p data-title={title}></p>
        </button>
      </div>
    </div>
  );
};

export default StyledButton;
