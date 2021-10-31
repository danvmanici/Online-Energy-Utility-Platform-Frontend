import React from 'react';
import validate from "./validators/person-validators";
import Button from "react-bootstrap/Button";
import * as API_USERS from "../api/login-api";
import APIResponseErrorMessage from "../../commons/errorhandling/api-response-error-message";
import {Col, Row} from "reactstrap";
import { FormGroup, Input, Label} from 'reactstrap';
import {Redirect} from "react-router-dom";
import PersonContainer from "../person-container"
import Admin from "./Admin";


class LoginForm extends React.Component{

    constructor(props) {
        super(props);
        //this.toggleForm = this.toggleForm.bind(this);
        this.reloadHandler = this.props.reloadHandler;
        let loggedIn = false
        this.state = {
            username: '',
            password: '',
            role: '',
            loggedIn,

            errorStatus: 0,
            error: null

        }

        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this)
    }





    loginUser(person) {
        return API_USERS.loginUser(person, (result, status, error) => {
            if (result !== null && (status === 200 || status === 201)) {
                console.log("Successfully: " + result);
                this.setState({
                    loggedIn: true,
                    role: result.role
                })
                this.reloadHandler();
            } else {
                this.setState(({
                    errorStatus: status,
                    error: error
                }));
            }
        });
    }

    submitForm(e){
        e.preventDefault()
        let person = {
            username: this.state.username,
            password: this.state.password,
        };

        console.log(person);
        this.loginUser(person);

    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        if (this.state.loggedIn) {
            localStorage.setItem("role", this.state.role);
            return <Redirect to="/admin"/>
        }
        return (
            <div>
                <form onSubmit={this.submitForm} >
                    <input type="text" placeholder="username" name={"username"} value={this.state.username} onChange={this.onChange}/>
                    <br/>
                    <input type="text" placeholder="password" name={"password"} value={this.state.password} onChange={this.onChange}/>
                    <br/>
                    <input type = "submit" />
                </form>

            </div>
        ) ;
    }
}

export default LoginForm