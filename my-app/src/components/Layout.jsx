import {  Outlet, NavLink } from "react-router-dom";
import React from 'react';
import SideBar from "./SideBar";
import ProfileArtist from "./ProfileArtist/ProfileArtist"


const Layout = () => {
    return (
        <>
            <SideBar>
                <NavLink to="/" className={({isActive}) => isActive ? 'active-link': ''}>Home</NavLink>
                <NavLink to="/News">News</NavLink>
                <NavLink to="/calendar">Calendar</NavLink>
                <NavLink to="/components/">ContentArtist</NavLink>
            </SideBar>
            <main className="container">
                <Outlet/>
            </main>
            <footer>2022</footer>
        </>
    )
}
export default Layout;