import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import {Observable} from 'rxjs';


const API_KEY = `074689b46c8704aa6988f88e7005a806`;
const url = "https://qa-sc.dnnapi.com:443/api/PublishedContentItems";

$.ajax({
  type: "GET",
  beforeSend: function(request) {
    request.setRequestHeader("authorization", "Bearer "+API_KEY);
  },
  url: url,
  processData: false,
  success: function(msg) {
   console.log(msg);
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
