import React from 'react';
import { Routes, Route } from 'react-router';
import ContentArtist   from './components/ContentArtist';
import News from './components/News';
import CalendarComp from './components/ProfileArtist/Calendar/Calendar';
import Layout from './components/Layout';
import './App.css';


const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<ContentArtist />} />
          <Route path="./components/News.jsx" element={<News />} />
          <Route path="./components/ProfileArtist/Calendar/Calendar.jsx" element={<CalendarComp />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;