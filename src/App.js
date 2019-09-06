import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Catalog from './Catalog.js';

import './stylesheets/App.css';
import './stylesheets/bootstrap.min.css';
import './stylesheets/bootstrap-grid.min.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div>Home</div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <div class="nav-link" href="#" tabindex="-1" aria-disabled="true">Catalog</div>
      </li>
      <li class="nav-item dropdown">
        <div class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </div>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <div class="dropdown-item" href="#">Action</div>
          <div class="dropdown-item" href="#">Another action</div>
          <div class="dropdown-divider"></div>
          <div class="dropdown-item" href="#">Something else here</div>
        </div>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    <header className="App-header">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Resource 1</h5>
                <p class="card-text">GET /accounts</p>
                <div href="#" class="btn btn-primary">Go somewhere</div>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Resource 2</h5>
                <p class="card-text">POST /accounts</p>
                <div href="#" class="btn btn-primary">Go somewhere</div>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Resource 3</h5>
                <p class="card-text">DELETE /accounts</p>
                <div href="#" class="btn btn-primary">Go somewhere</div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Resource 4</h5>
                <p class="card-text">GET /accounts</p>
                <div href="#" class="btn btn-primary">Go somewhere</div>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Resource 5</h5>
                <p class="card-text">POST /accounts</p>
                <div href="#" class="btn btn-primary">Go somewhere</div>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Resource 6</h5>
                <p class="card-text">DELETE /accounts</p>
                <div href="#" class="btn btn-primary">Go somewhere</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;