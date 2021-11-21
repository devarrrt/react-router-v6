import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import PostsPage from './pages/PostsPage'


const App = () => {
    return (
        <>
            <header className="header">
                <Link to="/"> Home </Link>
                <Link to="/posts"> Posts </Link>
                <Link to="/about"> About </Link>
            </header>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/posts" element={<PostsPage />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
        </>
    )
}

export default App
