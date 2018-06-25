import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Private from './components/Private/Private';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route component={ Login } path='/' exact />
          <Route component={ Private } path='/private' />
        </div> 
      </BrowserRouter>  
    );
  }
}

export default App;
