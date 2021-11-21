import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link, Outlet } from 'react-router-dom'
import CustomLink from './CustomLink'

const Layout = () => {

    const isActive = ({ isActive }) => isActive && "active-link"

    return (
        <>
            <header className="header">
                <CustomLink to="/" className={isActive}> Home </CustomLink>
                <CustomLink to="/posts" className={isActive}> Posts </CustomLink>
                <CustomLink to="/about" className={isActive}> About </CustomLink>
            </header>

            <main className="container">
                <Outlet />
            </main>

            <footer className="footer">
                react-router-dom 2021
            </footer>
        </>
    )
}

export default Layout
