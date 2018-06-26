import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Application from './components/Private/Application';
import JobDetails from './components/Private/JobDetails';
import './styles/App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }
  render() {

    return (
      <BrowserRouter history={ this.props.history }>
        <div>
          <Route component={ Login } path='/' exact />
          <Route component={ Application } path='/app' />
          <Route component={ JobDetails } path='/app/details' />
        </div> 
      </BrowserRouter>  
    );
  }
}

export default App;
