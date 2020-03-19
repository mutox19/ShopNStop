import React from 'react';
import logo from './logo.svg';
import Grocery from './Components/Grocery';
import ShoppingBag from './Components/ShoppingBag';
import Stats from './Components/Stats';
import './App.css';

function App() {
  return (
    <div className="container" >
      <div className="row ">
        <div class="jumbotron text-center">
        <h1 class="display-2">Shop N Stop</h1>
        <p>Where you can get you onlne products</p>
        </div>
      </div>
      <div className="row">
        <Grocery  className=""/>
        <ShoppingBag />
        <Stats />
      </div>
    </div>
  );
}

export default App;
