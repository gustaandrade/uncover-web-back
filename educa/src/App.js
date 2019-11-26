import React from 'react';
// import { BrowserRouter } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/index';
import CompanyCard from './components/CompanyCard/index';
import Visitation from './components/Visitation/index';
import Company from './components/Company/index';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <CompanyCard /> */}
      {/* <Visitation /> */}
      <Company />
    </div>
  );
}

export default App;
