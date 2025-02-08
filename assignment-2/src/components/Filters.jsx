import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions/filterActions';

const Filters = () => {
    const dispatch = useDispatch();

    return (
        <>
            <style>
                {`
                .filters-container {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    padding: 15px;
                    background-color: #f9f9f9;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    max-width: 260px;
                    margin: 20px auto;
                    font-family: Arial, sans-serif;
                }

                .filters-title {
                    margin-bottom: 12px;
                    font-size: 18px;
                    font-weight: bold;
                    color: #333;
                }

                .filters-select {
                    padding: 10px;
                    font-size: 16px;
                    border: 2px solid #ccc;
                    border-radius: 6px;
                    width: 100%;
                    background-color: #fff;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .filters-select:focus {
                    outline: none;
                    border-color: #007bff;
                    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
                }

                .filters-select option {
                    font-size: 16px;
                    padding: 10px;
                }
                `}
            </style>

            <div className="filters-container">
                <h3 className="filters-title">Filters</h3>
                <select
                    className="filters-select"
                    onChange={(e) => dispatch(setFilter(e.target.value))}
                >
                    <option value="">All</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="gluten-free">Gluten-Free</option>
                </select>
            </div>
        </>
    );
};

export default Filters;
