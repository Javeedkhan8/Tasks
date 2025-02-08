import React from "react";
import SearchBar from "./SearchBar";

const Header = ({ onSearch }) => {
  return (
    <div>
      <style>
        {`
          header {
            background-color: #fff;
            padding: 6px;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          header h1 {
            font-size: 2.5rem;
            color: #333;
            margin-bottom: 10px;
          }

          header input {
            padding: 10px;
            width: 300px;
            font-size: 1rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            outline: none;
            transition: border-color 0.3s ease;
          }

          header input:focus {
            border-color: #007bff;
          }

          header input::placeholder {
            color: #aaa;
          }
        `}
      </style>
      <header>
        <h1>Recipe Finder</h1> 
      </header>
    </div>
  );
};

export default Header;
