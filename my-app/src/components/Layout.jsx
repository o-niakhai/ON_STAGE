import {  Outlet, Link } from "react-router-dom";
import React from 'react';


const Layout = () => {
    return (
        <>
            <header>
                <Link to="/home">Home</Link>
                <Link to="/News">News</Link>
                <Link to="/calendar">Calendar</Link>
                <Link to="/components/">ContentArtist</Link>
            </header>
                <Outlet/>
            <footer>2022</footer>
        </>
    )
}
export default Layout;