import React, { Component } from 'react';
// import axios from 'axios';
import '../../styles/JandC.css';
import { connect } from 'react-redux';
import { getMyJobs } from './../../ducks/job';

class GetJobs extends Component {
    componentDidMount() {
        //hard coded 2 but need a method to see whos logged in
        this.props.getMyJobs(2);
    }
    render() {
        const jobRender = this.props.jobs.length>0 ? this.props.jobs.map((el, i, a)=>{
            console.log(el)
            return (
                <div className='jobLine' key={`jobLine${i}`} >
                    <span key={`jobLine_id_${i}`}>{el.id}</span>
                    <span key={`jobLine_name_${i}`}>{el.name}</span>
                    <span key={`jobLine_estimate_${i}`}>{el.estimate_amount}</span>
                
                </div>
            )
        }) : "no jobs" 
        return (
            <div id='jobList'>
                {jobRender}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        jobs: state.job
    }
}
const mapDispatchToProps = {
    getMyJobs
}

export default connect(mapStateToProps, mapDispatchToProps)(GetJobs);
