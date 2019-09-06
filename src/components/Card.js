import React from 'react';
import '../stylesheets/App.css';
import '../stylesheets/bootstrap.min.css';
import '..//stylesheets/bootstrap-grid.min.css';

function Card(props) {
  return (
    <div class="col-sm">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Resource {props.id}</h5>
                <p class="card-text">{props.method} /{props.resource}</p>
                <div href="#" class="btn btn-primary">Go somewhere</div>
            </div>
        </div>
    </div>
  );
}

export default Card;