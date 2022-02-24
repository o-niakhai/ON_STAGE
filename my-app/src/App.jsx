import React from 'react';
import Header from './components/Header';
import ContentArtist from './components/ContentArtist';
import News from './components/News';
import Calendar from './components/Calendar';
import Home from './components/Home';
import './App.css';


const App = () => {
  return (
    <div >
      <Header />
      <ContentArtist />
      <Home />
      <News/>
      <Calendar/>
    </div>
  );
}
export default App;