import React, { Component } from 'react';
import  '../../styles/JobDetails.css';
import { connect } from 'react-redux';
// import { getJob } from './../../ducks/job';


class JobDetails extends Component {
    constructor(props){
        super(props)
    }

    render() {
        console.log('props on details',this.props)
//city: "salt lake city"
// company_id: 2
// date: "2018-05-28T06:00:00.000Z"
// estimate_amount: 30000
// estimator_id: 2
// id: 1
        let index = window.location.pathname.split('/').pop();
        if(this.props && index){
        return (
            <div id='JobDetailsContainer'>
                {/* <label for='estimate'>Estimate Amount</label>
                <input id='estimate' value='12345'></input> */}
                {/* <label for='estimator'>Estimator</label>
                <input id='estimator' value={this.props.job[index].estimator_id}></input>
                <label for='company'>Company</label>
                <input id='company' value={this.props.job[index].company_id}></input>
                <label for='city'>City</label>
                <input id='city' value={this.props.job[index].city}></input>
                <label for='company'>Estimate Amount</label>
                <input id='company' value='my_company'></input> */}
                <button>Cancel</button>
                <button onClick={_=>{ this.handleSave()}} >Save</button>
            </div>
        );
    } else return null
    }
}

function mapStateToProps(state) {
    console.log('state on details', state)
    return {
        job: state.job
    }
}
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(JobDetails);