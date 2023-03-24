import React from 'react';
import "./home.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorites from '../favorites/Favorites';
import Feed from '../feed/Feed';
import Library from '../library/Library';
import Player from '../player/Player';
import Trending from '../trending/Trending';
import Sidebar from '../../components/sidebar/Sidebar';


const Home = () => {
    return (
        < Router >
            <div className="main-body">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Library />} />
                    <Route path="/feed" element={<Feed />} />
                    <Route path="/trending" element={<Trending />} />
                    <Route path="/player" element={<Player />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </div>
        </ Router>
    )
}

export default Home
