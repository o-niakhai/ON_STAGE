import React from 'react';
import { Routes, Route } from 'react-router';
import ContentArtist   from './components/ContentArtist';
import News from './components/News';
import CalendarArtist from './components/CalendarArtist';
import SideBar from './components/SideBar';
import Layout from './components/Layout';
import './App.css';


const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<ContentArtist />} />
          <Route path="news" element={<News />} />
          <Route path="calendarArtist" element={<CalendarArtist />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;