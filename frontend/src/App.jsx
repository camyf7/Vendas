import React from 'react';
import './App.css';
import Routes from './Routers';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;

