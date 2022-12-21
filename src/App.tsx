import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './router';

function App() {
  return (
    <>
    <Router > 
      <Pages />
    </Router>
    </>
  );
}

export default App;
