import {  Outlet, NavLink } from "react-router-dom";
import React from 'react';
import TopBar from "./TopBar";

const setActive = ({isActive}) => isActive ? 'active-link' : '';

const Layout = () => {
    return (
        <>
            <TopBar>
                <NavLink to="/" className={setActive}>Home</NavLink>
                <NavLink to="/News" className={setActive}>News</NavLink>
                <NavLink to="/calendar" className={setActive}>Calendar</NavLink>
                <NavLink to="/components/" className={setActive}>ContentArtist</NavLink>
            </TopBar>
            <main className="container">
                <Outlet/>
            </main>
            <footer>2022</footer>
        </>
    )
}
export default Layout;