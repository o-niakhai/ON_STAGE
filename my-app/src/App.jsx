import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header';
import ContentArtist from './components/ContentArtist';
import Home from './components/Home';
import News from './components/News';
import Calendar from './components/Calendar';
import './App.css';


const App = () => {
  return (
    <div >
      <Header/>
      <ContentArtist />
    </div>
  );
}
export default App;