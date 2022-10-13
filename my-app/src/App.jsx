import React from 'react';
import TopBar   from './components/TopBar';
import {Route, Routes} from 'react-router';
import './App.css';
import ContentArtist from './components/ContentArtist';
import News from './components/NewsCom/News';
import Frends from './components/Frends';
import Calendar from './components/ProfileArtist/Calendar/Calendar';


const App = () => {
  return (
    <div >
      <TopBar/>
      <Routes>
          <Route path="/" element={<ContentArtist/>}/>
          <Route path="Home" element={<ContentArtist/>}/>
          <Route path="News" element={<News/>}/>
          <Route path="Frends" element={<Frends/>}/>
          <Route path="Calendar" element={<Calendar/>}/>
      </Routes>
    </div>
  );
}
export default App;