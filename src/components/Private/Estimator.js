import React, { Component } from 'react';
import '../../styles/Estimator.css';
import GetJobs from './GetJobs';
import GetCompanies from './GetCompanies';

class Estimator extends Component {
    render() {
        return (
            <div>
                <div id="header">

                </div>
                <div id="menu">
                    <span className="icon">get jobs</span>
                    <span className="icon">get customers</span>
                    <span className="icon">3</span>
                    <span className="icon">menu</span>
                </div>
                < GetJobs />
                {/* < GetCompanies /> */}
            </div>
        );
    }
}

export default Estimator;