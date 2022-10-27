import {  Outlet, NavLink } from "react-router-dom";
import React from 'react';
import TopBar from "./TopBar";

const setActive = ({isActive}) => isActive ? 'active-link' : '';


const Layout = () => {
    return (
        <>
            <Routes>
                <Route to="/" className={setActive}>Home</Route>
                <Route to="/News" className={setActive}>News</Route>
                <Route to="/calendar" className={setActive}>Calendar</Route>
                <Route to="/components/" className={setActive}>ContentArtist</Route>
            </Routes>
            <main className="container">
                <Outlet/>
            </main>
            <footer>2022</footer>
        </>
    )
}
export default Layout;