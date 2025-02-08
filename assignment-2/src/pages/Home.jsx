import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';
import Filters from '../components/Filters';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    return (
        <div>
            <style>
                {`
                    .container {
                        width: 90%;
                        max-width: 1200px;
                        margin: auto;
                        padding: 20px;
                        font-family: Arial, sans-serif;
                    }
                    .search-filter-container {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        background-color: #ffffff;
                        padding: 15px 20px;
                        border-radius: 10px;
                        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                        margin-bottom: 20px;
                    }
                    .fav-button {
                        background-color: #007bff;
                        color: white;
                        border: none;
                        padding: 10px 18px;
                        font-size: 14px;
                        font-weight: bold;
                        border-radius: 6px;
                        cursor: pointer;
                        transition: background 0.3s ease-in-out;
                    }
                    .fav-button:hover {
                        background-color: #0056b3;
                    }
                    .recipe-list {
                        margin-top: 20px;
                    }
                `}
            </style>

            <div className="container">
                <div className="search-filter-container">
                    <SearchBar onSearch={setSearchQuery} />
                    <Filters />
                    <button className="fav-button" onClick={() => navigate('/favorites')}>
                        ⭐ Favorites
                    </button>
                </div>
                <div className="recipe-list">
                    <RecipeList searchQuery={searchQuery} />
                </div>
            </div>
        </div>
    );
};

export default Home;
