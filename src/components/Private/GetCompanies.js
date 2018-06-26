import React, { Component } from 'react';
import '../../styles/JandC.css';
// import axios from 'axios';
import { connect } from 'react-redux';
import { getAllCompanies } from './../../ducks/company';

class GetCompanies extends Component {
    componentDidMount() {
        this.props.getAllCompanies();
    }
    render() {
        console.log(this.props)
        const companyRender = this.props.companies.length>0 ? this.props.companies.map((el, i, a)=>{
            console.log(el)
            return (
                <div className='companyLine' key={`companyLine${i}`} >
                    <span key={`companyLine_id_${i}`}>{el.id}</span>
                    {/* <span key={`companyLine_logo_${i}`}>{el.logo}</span> */}
                    <span key={`companyLine_name_${i}`}>{el.name}</span>
                
                </div>
            )
        }) : "no companies" 
        return (
            <div id='companyList'>
                {companyRender}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        companies: state.company
    }
}
const mapDispatchToProps = {
    getAllCompanies
}

export default connect(mapStateToProps, mapDispatchToProps)(GetCompanies);
