import React, { Component } from 'react';
import '../../styles/Estimator.css';
import Jobs from './GetJobs';
import Companies from './GetCompanies';
import AddJob from './AddJob';

class Estimator extends Component {

    constructor(props){
        super(props)
        this.state={
            renderedComp:''
        }
        this.handleGetCustomers = this.handleGetCustomers.bind(this);
        this.handleGetJobs = this.handleGetJobs.bind(this);
    }

    handleGetJobs(){
        this.setState({
            renderedComp:'getJobs'
        })
    }
    handleGetCustomers(){
        this.setState({
            renderedComp:'getCustomers'
        })
    }



    render() {
        const RenderThisComp = ()=>{
            if (this.state.renderedComp === 'getJobs'){return (< Jobs />)}
            
            else if (this.state.renderedComp === 'getCustomers'){return (< Companies />)}

            else return (< AddJob />)
        }
        return (
            <div>
                <div id="header">

                </div>
                <div id="menu">
                    <span onClick={this.handleGetJobs} className="icon">get jobs</span>
                    <span onClick={this.handleGetCustomers} className="icon">get customers</span>
                    <span className="icon">3</span>
                    <span className="icon">menu</span>
                </div>
                {RenderThisComp()}
            </div>
        );
    }
}

export default Estimator;