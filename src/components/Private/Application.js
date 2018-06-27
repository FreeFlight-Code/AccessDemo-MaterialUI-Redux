import React, { Component } from 'react';
import '../../styles/Application.css';
import Admin from './Admin';
import Estimator from './Estimator';

class Application extends Component {

    constructor(props) {
        super(props)
        this.state = {
          auth: 'estimator'
        }
      }
      componentDidMount() {
          //get auth from /auth/me and set to this.state.auth
      }
    

    render() {
        if (this.state.auth === 'administrator'){
            return (
                < Admin />
            );
        }
        else if (this.state.auth === 'estimator'){
            return (
                < Estimator />
            );
            
        } else {
            alert('improper login please try again')
            this.props.history.push('/')}
            return null
    }
}

export default Application;