import React, { Component } from 'react';
import './Login.css';


export default class Login extends Component {
    render() {
        return (
            <div className='App'>  
                <img src='https://d3ciwvs59ifrt8.cloudfront.net/17061801-8d2b-4f41-8b94-6eefca921850/a086099e-4135-47fa-9134-c627d5d2ff11_m.jpg' alt=""/>
                {/* <a href={ process.env.REACT_APP_LOGIN }><button>Login</button></a> */}
                <a href='/app'><button>Login</button></a>
            </div> 
        )
    }
}