import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (onSearch) {
            onSearch(query); 
        }
    };

    return (
        <>
            <style>
                {`
                .search-bar-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 15px;
                    background-color: #f9f9f9;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    max-width: 300px;
                    margin: 20px auto;
                    font-family: Arial, sans-serif;
                }

                .search-input {
                    padding: 10px;
                    font-size: 16px;
                    border: 2px solid #ccc;
                    border-radius: 6px;
                    width: 100%;
                    background-color: #fff;
                    transition: all 0.3s ease;
                    margin-right: 10px;
                }

                .search-input:focus {
                    outline: none;
                    border-color: #007bff;
                    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
                }

                .search-button {
                    padding: 10px 15px;
                    font-size: 16px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .search-button:hover {
                    background-color: #0056b3;
                }
                `}
            </style>

            <div className="search-bar-container">
                <input 
                    type="text" 
                    className="search-input"
                    placeholder="Search recipes..." 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                />
                <button className="search-button" onClick={handleSearch}>Search</button>
            </div>
        </>
    );
};

export default SearchBar;
