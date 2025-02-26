import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipePage from './pages/RecipePage';
import FavoritesPage from './pages/FavoritesPage';
import Header from './components/Header';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipe/:id" element={<RecipePage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
        </Router>
    );
};

export default App;
