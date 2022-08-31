import { Link, Outlet } from 'react-router';

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
export {Layout}