import React from 'react';
import './App';
import { BrowserRouter as Router } from "react-router-dom";
import HeaderComponent from './components/HeaderComponent';
import Routes from './controllers/Routes';

const App = props => {
  return (
    <div className="App">
      <HeaderComponent />
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
