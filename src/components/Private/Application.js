import React, { Component } from 'react';
import '../../styles/Application.css';
import Admin from './Admin';
import Estimator from './Estimator';

class Application extends Component {
    render() {
        return (
            <div>
                {/* < Admin /> */}
                < Estimator />
            </div>
        );
    }
}

export default Application;