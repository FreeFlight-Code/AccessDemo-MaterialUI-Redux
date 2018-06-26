import React, { Component } from 'react';
import  '../../styles/JobDetails.css';

class JobDetails extends Component {
    render() {
        console.log('this is the props on details', this.props)
        return (
            <div id='JobDetailsContainer'>
                hello world
            </div>
        );
    }
}

export default JobDetails;