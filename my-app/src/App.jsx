import React from 'react';
import { Routes, Route, Link } from 'react-router';
import { Header } from './components/Header';
import { ContentArtist }  from './components/ContentArtist';
import { News }  from './components/News';
import { Calendar }  from './components/Calendar';
import './App.css';


const App = () => {
  return (
    <div >
      
      <Routes>
        <Route path="./components/ContentArtist.jsx" element={<ContentArtist/>} />
        <Route path="./components/News.jsx" element={<News/>} />
        <Route path="./components/Calendar.jsx" element={<Calendar/>} />
      </Routes>
    </div>
  );
}
export default App;