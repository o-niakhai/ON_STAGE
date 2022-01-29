import React from 'react';
import ResponsiveAppBar from './components/Header';
import Content from '../src/components/Content'
import './App.css';


const App = () => {
  return (
    <div >
      <ResponsiveAppBar />
      <Content />
    </div>
  );
}

export default App;