import React from 'react';
import validate from "./validators/person-validators";
import Button from "react-bootstrap/Button";
import * as API_USERS from "../api/login-api";
import APIResponseErrorMessage from "../../commons/errorhandling/api-response-error-message";
import {Col, Row} from "reactstrap";
import { FormGroup, Input, Label} from 'reactstrap';
import {Redirect} from "react-router-dom";




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
            loggedIn
            /*
            errorStatus: 0,
            error: null,

            formIsValid: false,

            formControls: {
                username: {
                    value: '',
                    placeholder: 'What is your username?...',
                    valid: false,
                    touched: false,
                },
                password: {
                    value: '',
                    placeholder: 'Password...',
                    valid: false,
                    touched: false,
                },
                role: {
                    value: '',
                    placeholder: 'role',
                    valid: false,
                    touched: false,
                },
            }

             */
        }

        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this)
    }



    toggleForm() {
        this.setState({collapseForm: !this.state.collapseForm});
    }

    handleChange = event => {

        const name = event.target.name;
        const value = event.target.value;

        const updatedControls = this.state.formControls;

        const updatedFormElement = updatedControls[name];

        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = validate(value, updatedFormElement.validationRules);
        updatedControls[name] = updatedFormElement;

        let formIsValid = true;
        for (let updatedFormElementName in updatedControls) {
            formIsValid = updatedControls[updatedFormElementName].valid && formIsValid;
        }

        this.setState({
            formControls: updatedControls,
            formIsValid: formIsValid
        });

    };

    loginUser(person) {
        return API_USERS.getUser(person, (result, status, error) => {
            if (result !== null && (status === 200 || status === 201)) {
                console.log("Successfully: " + result);
                this.reloadHandler();
            } else {
                this.setState(({
                    errorStatus: status,
                    error: error
                }));
            }
        });
    }

    handleSubmit(e) {

        let person = {
            username: this.state.formControls.username.value,
            password: this.state.formControls.password.value,
        };

        console.log(person);
        this.loginUser(person);
        const {role} = this.state
        if(role==="admin"){
            localStorage.setItem("token", "a")
            this.setState({
                loggedIn: true
            })
        }

    }

    submitForm(e){
        e.preventDefault()
        const {username, password} = this.state

        if(username==="admin" && password==="admin"){
            localStorage.setItem("token", "a")
            this.setState({
                loggedIn: true
            })
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/client"/>
        }
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <input type="text" placeholder="username" name={"username"} value={this.state.username} onChange={this.onChange}/>
                    <br/>
                    <input type="text" placeholder="password" name={"password"} value={this.state.password} onChange={this.onChange}/>
                    <br/>
                    <input type = "submit"/>
                </form>

            </div>
        ) ;
    }
}

export default LoginForm