import React from 'react';
import ResponsiveAppBar from './components/Header';
import CSSGrid from '../src/components/Content'
import './App.css';


const App = () => {
  return (
    <div >
      <ResponsiveAppBar />
      <CSSGrid/>
    </div>
  );
}

export default App;