import {  Outlet, Link } from "react-router-dom";
import React from 'react';
import SideBar from "./SideBar";


const Layout = () => {
    return (
        <>
            <SideBar>
                <Link to="/home">Home</Link>
                <Link to="/News">News</Link>
                <Link to="/calendar">Calendar</Link>
                <Link to="/components/">ContentArtist</Link>
            </SideBar>
                <Outlet/>
            <footer>2022</footer>
        </>
    )
}
export default Layout;