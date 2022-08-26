import { Routes, Route, Link } from 'react-router';

const Layout = () => {
    return (
        <Header>
            <a href="/home">Home</a>
            <a href="/News">News</a>
            <a href="/calendar">Calendar</a>
            <a href="/components/">ContentArtist</a>
        </Header>
    )
}
export {Layout}