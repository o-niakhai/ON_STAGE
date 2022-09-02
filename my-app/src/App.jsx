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
        <Route path='/' element={<SideBar/>}>
          <Route path="./components/ContentArtist.jsx" element={<ContentArtist />} />
          <Route path="./components/News.jsx" element={<News />} />
          <Route path="./components/CalendarArtist.jsx" element={<CalendarArtist />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;