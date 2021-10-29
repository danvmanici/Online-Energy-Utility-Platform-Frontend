import React from 'react';
import validate from "./validators/person-validators";
import Button from "react-bootstrap/Button";
import * as API_USERS from "../api/device-api";
import APIResponseErrorMessage from "../../commons/errorhandling/api-response-error-message";
import {Col, Row} from "reactstrap";
import { FormGroup, Input, Label} from 'reactstrap';



class DeviceForm extends React.Component {

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
                address: {
                    value: '',
                    placeholder: 'Cluj, Zorilor, Str. Lalelelor 21...',
                    valid: false,
                    touched: false,
                },
                maximum_energy_consumption: {
                    value: '',
                    placeholder: 'Maximum_energy_consumption...',
                    valid: false,
                    touched: false,
                },
                average_energy_consumption: {
                    value: '',
                    placeholder: 'Average_energy_consumption...',
                    valid: false,
                    touched: false,
                },
                client_id: {
                    value: '',
                    placeholder: 'client_id...',
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

    registerDevice(person) {
        return API_USERS.postDevice(person, (result, status, error) => {
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

    updateDevice(person) {
        return API_USERS.putDevice(person, (result, status, error) => {
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

    removeDevice(person) {
        return API_USERS.deleteDevice(person, (result, status, error) => {
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
            address: this.state.formControls.address.value,
            maximum_energy_consumption: this.state.formControls.maximum_energy_consumption.value,
            average_energy_consumption: this.state.formControls.average_energy_consumption.value,
            client_id: this.state.formControls.client_id.value
        };

        console.log(person);
        this.registerDevice(person);
    }

    handleSubmitUpdate() {
        let person = {
            id: this.state.formControls.id.value,
            description: this.state.formControls.description.value,
            address: this.state.formControls.address.value,
            maximum_energy_consumption: this.state.formControls.maximum_energy_consumption.value,
            average_energy_consumption: this.state.formControls.average_energy_consumption.value,
            client_id: this.state.formControls.client_id.value
        };

        console.log(person);
        this.updateDevice(person);
    }

    handleSubmitDelete() {
        let person = {
            id: this.state.formControls.id.value,
        };

        console.log(person);
        this.removeDevice(person);
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

                <FormGroup id='address'>
                    <Label for='addressField'> Address: </Label>
                    <Input name='address' id='addressField' placeholder={this.state.formControls.address.placeholder}
                           onChange={this.handleChange}
                           defaultValue={this.state.formControls.address.value}
                           touched={this.state.formControls.address.touched? 1 : 0}
                           valid={this.state.formControls.address.valid}
                        //required
                    />
                </FormGroup>


                <FormGroup id='maximum_energy_consumption'>
                    <Label for='maximum_energy_consumptionField'> Maximum_energy_consumption: </Label>
                    <Input name='maximum_energy_consumption' id='maximum_energy_consumptionField' placeholder={this.state.formControls.maximum_energy_consumption.placeholder}
                           type="int"
                           onChange={this.handleChange}
                           defaultValue={this.state.formControls.maximum_energy_consumption.value}
                           touched={this.state.formControls.maximum_energy_consumption.touched? 1 : 0}
                           valid={this.state.formControls.maximum_energy_consumption.valid}
                        //required
                    />
                </FormGroup>

                <FormGroup id='average_energy_consumption'>
                    <Label for='average_energy_consumptionField'> Average_energy_consumption: </Label>
                    <Input name='average_energy_consumption' id='average_energy_consumptionField' placeholder={this.state.formControls.average_energy_consumption.placeholder}
                           type="int"
                           onChange={this.handleChange}
                           defaultValue={this.state.formControls.average_energy_consumption.value}
                           touched={this.state.formControls.average_energy_consumption.touched? 1 : 0}
                           valid={this.state.formControls.average_energy_consumption.valid}
                        //required
                    />
                </FormGroup>

                <FormGroup id='client_id'>
                    <Label for='client_idField'> Id: </Label>
                    <Input name='client_id' id='client_idField' placeholder={this.state.formControls.client_id.placeholder}
                           onChange={this.handleChange}
                           defaultValue={this.state.formControls.client_id.value}
                           touched={this.state.formControls.client_id.touched? 1 : 0}
                           valid={this.state.formControls.client_id.valid}
                        //required
                    />
                </FormGroup>

                <Row>
                    <Button type={"submit"} disabled={!this.state.formIsValid} onClick={this.handleSubmit}>  Insert </Button>
                    <Button type={"submit"} disabled={!this.state.formIsValid} onClick={this.handleSubmitUpdate}>  Update </Button>
                    <Button type={"submit"} disabled={!this.state.formIsValid} onClick={this.handleSubmitDelete}>  Delete </Button>
                </Row>

                {
                    this.state.errorStatus > 0 &&
                    <APIResponseErrorMessage errorStatus={this.state.errorStatus} error={this.state.error}/>
                }
            </div>
        ) ;
    }
}

export default DeviceForm;
