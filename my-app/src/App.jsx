import React from 'react';
import { Routes, Route } from 'react-router';
import { ContentArtist }  from './components/ContentArtist';
import { News }  from './components/News';
import { Calendar1 }  from './components/Calendar1';
import { Header } from './components/Header'
import './App.css';


const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route path="./components/ContentArtist.jsx" element={<ContentArtist />} />
          <Route path="./components/News.jsx" element={<News />} />
          <Route path="./components/Calendar1.jsx" element={<Calendar1 />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;