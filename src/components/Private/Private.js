import React, { Component } from 'react';
import AppBar from './AppBar';
import './Private.css'
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import Table from './Table';

import { connect } from 'react-redux';
import { getUserInfo } from './../../ducks/user';

class Private extends Component {

    componentDidMount() {
        this.props.getUserInfo();
    }

    render() {

        return (
            <div>
                < AppBar />
                <div id='leftside'>
                    <Subheader>Filters</Subheader>
                    <TextField
                        id="companyName"
                        hintText="Company"
                        floatingLabelText="Company Name"
                    /><br />
                    <TextField
                        id="estimatorName"
                        hintText="Estimator"
                        floatingLabelText="Estimator Name"
                    /><br />
                </div>
                <div id='rightside'>
                    < Table />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(Private);