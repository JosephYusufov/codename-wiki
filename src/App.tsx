import React from 'react';
import './styles/App.scss';

export default function App(){
  return(
    <div>
      <h1>Hello World</h1>
      <div className="columns">
        <div className="column">1</div>
        <div className="column">2</div>
        <div className="column">3</div>
        <div className="column">4</div>
        <div className="column">5</div>
      </div>
    </div>
  );
}