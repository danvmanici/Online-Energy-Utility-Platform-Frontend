import React from 'react';
import validate from "./validators/person-validators";
import Button from "react-bootstrap/Button";
import * as API_USERS from "../api/sensor-api";
import APIResponseErrorMessage from "../../commons/errorhandling/api-response-error-message";
import {Col, Row} from "reactstrap";
import { FormGroup, Input, Label} from 'reactstrap';



class SensorForm extends React.Component {

    constructor(props) {
        super(props);
        this.toggleForm = this.toggleForm.bind(this);
        this.reloadHandler = this.props.reloadHandler;

        this.state = {

            errorStatus: 0,
            error: null,

            formIsValid: false,

            formControls: {
                id: {
                    value: '',
                    placeholder: 'Id...',
                    valid: false,
                    touched: false,
                },
                description: {
                    value: '',
                    placeholder: 'Description...',
                    valid: false,
                    touched: false,
                },
                max_value: {
                    value: '',
                    placeholder: 'Max_value...',
                    valid: false,
                    touched: false,
                },
                smartDevice_id: {
                    value: '',
                    placeholder: 'SmartDevice_id...',
                    valid: false,
                    touched: false,
                },
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitUpdate = this.handleSubmitUpdate.bind(this);
        this.handleSubmitDelete = this.handleSubmitDelete.bind(this);
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

    registerSensor(person) {
        return API_USERS.postSensor(person, (result, status, error) => {
            if (result !== null && (status === 200 || status === 201)) {
                console.log("Successfully inserted person with id: " + result);
                this.reloadHandler();
            } else {
                this.setState(({
                    errorStatus: status,
                    error: error
                }));
            }
        });
    }

    updateSensor(person) {
        return API_USERS.putSensor(person, (result, status, error) => {
            if (result !== null && (status === 200 || status === 201)) {
                console.log("Successfully inserted person with id: " + result);
                this.reloadHandler();
            } else {
                this.setState(({
                    errorStatus: status,
                    error: error
                }));
            }
        });
    }

    removeSensor(person) {
        return API_USERS.deleteSensor(person, (result, status, error) => {
            if (result !== null && (status === 200 || status === 201)) {
                console.log("Successfully inserted person with id: " + result);
                this.reloadHandler();
            } else {
                this.setState(({
                    errorStatus: status,
                    error: error
                }));
            }
        });
    }

    handleSubmit() {
        let person = {
            description: this.state.formControls.description.value,
            max_value: this.state.formControls.max_value.value,
            smartDevice_id: this.state.formControls.smartDevice_id.value
        };

        console.log(person);
        this.registerSensor(person);
    }

    handleSubmitUpdate() {
        let person = {
            id: this.state.formControls.id.value,
            description: this.state.formControls.description.value,
            max_value: this.state.formControls.max_value.value,
            smartDevice_id: this.state.formControls.smartDevice_id.value
        };

        console.log(person);
        this.updateSensor(person);
    }

    handleSubmitDelete() {
        let person = {
            id: this.state.formControls.id.value,
        };

        console.log(person);
        this.removeSensor(person);
    }

    render() {
        return (
            <div>
                <FormGroup id='id'>
                    <Label for='idField'> Id: </Label>
                    <Input name='id' id='idField' placeholder={this.state.formControls.id.placeholder}
                           onChange={this.handleChange}
                           defaultValue={this.state.formControls.id.value}
                           touched={this.state.formControls.id.touched? 1 : 0}
                           valid={this.state.formControls.id.valid}
                        //required
                    />
                </FormGroup>

                <FormGroup id='description'>
                    <Label for='descriptionField'> Description: </Label>
                    <Input name='description' id='descriptionField' placeholder={this.state.formControls.description.placeholder}
                           onChange={this.handleChange}
                           defaultValue={this.state.formControls.description.value}
                           touched={this.state.formControls.description.touched? 1 : 0}
                           valid={this.state.formControls.description.valid}
                        //required
                    />
                </FormGroup>

                <FormGroup id='max_value'>
                    <Label for='max_valueField'> Maximum_energy_consumption: </Label>
                    <Input name='max_value' id='max_valueField' placeholder={this.state.formControls.max_value.placeholder}
                           type="int"
                           onChange={this.handleChange}
                           defaultValue={this.state.formControls.max_value.value}
                           touched={this.state.formControls.max_value.touched? 1 : 0}
                           valid={this.state.formControls.max_value.valid}
                        //required
                    />
                </FormGroup>

                <FormGroup id='smartDevice_id'>
                    <Label for='smartDevice_idField'> SmartDevice_id: </Label>
                    <Input name='smartDevice_id' id='smartDevice_idField' placeholder={this.state.formControls.smartDevice_id.placeholder}
                           onChange={this.handleChange}
                           defaultValue={this.state.formControls.smartDevice_id.value}
                           touched={this.state.formControls.smartDevice_id.touched? 1 : 0}
                           valid={this.state.formControls.smartDevice_id.valid}
                        //required
                    />
                </FormGroup>

                <Row>
                    <Button type={"submit"}  onClick={this.handleSubmit}>  Insert </Button>
                    <Button type={"submit"}  onClick={this.handleSubmitUpdate}>  Update </Button>
                    <Button type={"submit"}  onClick={this.handleSubmitDelete}>  Delete </Button>
                </Row>

                {
                    this.state.errorStatus > 0 &&
                    <APIResponseErrorMessage errorStatus={this.state.errorStatus} error={this.state.error}/>
                }
            </div>
        ) ;
    }
}

export default SensorForm;
