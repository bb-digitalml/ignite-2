import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Card from './components/Card';
import Nav from './components/Nav';

import './stylesheets/App.css';
import './stylesheets/bootstrap.min.css';
import './stylesheets/bootstrap-grid.min.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <div class="container">
          <div class="row">
            <Card id="1" method="GET" resource="accounts"/>
            <Card id="2" method="POST" resource="accounts"/>
            <Card id="3" method="DELETE" resource="accounts"/>
          </div>
          <div class="row">
            <Card id="4" method="GET" resource="balance"/>
            <Card id="5" method="POST" resource="balance"/>
            <Card id="6" method="DELETE" resource="balance"/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;