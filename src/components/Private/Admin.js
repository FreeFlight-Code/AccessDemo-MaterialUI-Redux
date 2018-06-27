import React, { Component } from 'react';
import AppBar from './AppBar';
import '../../styles/Admin.css'
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
// import Table from './Table';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import { connect } from 'react-redux';
import { getUserInfo } from './../../ducks/people';
import { getJobs } from './../../ducks/job';

//
// const json = require('./Jobs.json');

// var results;

class Private extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //user_name is estimator and name is company name
            name: '',
            date: '',
            user_name: '',
            sorted: []
        }
        // this.filterData = this.filterData.bind(this);
    }



    componentWillMount() {
        this.props.getUserInfo();
        this.props.getJobs();
    }

    componentDidMount() {
        if (this.props.jobs.length > 0) {
            let results = this.props.jobs;
            this.setState({
                jobs: results,
                sorted: results
            })
        }
    }

    onFilterChange = (e) => {
        let stateTargetKey = e.target.id;
        let stateValueChange = e.target.value;
        let newResults = this.state.name.length > 0 || this.state.user_name.length > 0 ? this.state.sorted : this.props.jobs;
        let filterItems = newResults.filter((el, i, a)=> {
            if(el && el[stateTargetKey] && el[stateTargetKey].includes(stateValueChange))  return (el);
            else return null;
        })
        this.setState({
            [stateTargetKey]: stateValueChange,
            sorted: filterItems
        })

    }

    render() {
        // console.log(this.props.jobs)
        // console.log(this.state.sorted, 'sorted')
        var sortedData = this.state.sorted.length > 0 ? this.state.sorted : this.props.jobs;
        const dataMapping = () => {

            if (sortedData) {
                return (sortedData.map((e, i, a) => {
                    // let myDate = Date.parse(e.date);
                    // console.log(myDate.toLocaleDateString());
                    // let date = e.date.toLocaleDateString();
                    return (
                        <TableRow key={'tablerow' + i}>
                            <TableRowColumn key={'company_column' + i}>{e.name}</TableRowColumn>
                            <TableRowColumn key={'estimate_column' + i}>{e.estimate_amount}</TableRowColumn>
                            <TableRowColumn key={'estimator_column' + i}>{e.user_name}</TableRowColumn>
                            <TableRowColumn key={'date_column' + i}>{e.date}</TableRowColumn>
                        </TableRow>
                    )
                }))
            }
            else return <div>hi there</div>
        }
        return (
            <div>
                < AppBar />
                <div id='mainpage'>
                    <div id='leftside'>
                        <Subheader>Filters</Subheader>
                        <TextField
                            id="name"
                            hintText="Company"
                            floatingLabelText="Company Name"
                            onChange={(e) => { this.onFilterChange(e) }}
                        /><br />
                        <TextField
                            id="user_name"
                            hintText="Estimator"
                            floatingLabelText="Estimator Name"
                            onChange={this.onFilterChange}
                        /><br />
                    </div>
                    <div id='rightside'>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHeaderColumn>Company Name</TableHeaderColumn>
                                    <TableHeaderColumn>Bid</TableHeaderColumn>
                                    <TableHeaderColumn>Estimator</TableHeaderColumn>
                                    <TableHeaderColumn>Date</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {dataMapping()}
                            </TableBody>

                        </Table>
                    </div>
                </div>
            </div>
        )
    }
}




function mapStateToProps(state) {
    // console.log(state, 'store on private')
    return {
        user: state.user,
        jobs: state.job
    }
}
const mapDispatchToProps = {

    getUserInfo,
    getJobs
}

export default connect(mapStateToProps, mapDispatchToProps)(Private);
