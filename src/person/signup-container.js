import React from 'react';
import APIResponseErrorMessage from "../commons/errorhandling/api-response-error-message";
import {
    Button,
    Card,
    CardHeader,
    Col,
    Modal,
    ModalBody,
    ModalHeader,
    Row
} from 'reactstrap';
import SignUpForm from "./components/signup-form";


import * as API_USERS from "./api/login-api"


class SignUpContainer extends React.Component{

    constructor(props) {
        super(props);
        this.toggleForm = this.toggleForm.bind(this);
        this.reload = this.reload.bind(this);
        this.state = {
            selected: false,
            collapseForm: false,
            tableData: [],
            isLoaded: false,
            errorStatus: 0,
            error: null
        };
    }

    toggleForm() {
        this.setState({selected: !this.state.selected});
    }

    reload() {
        this.setState({
            isLoaded: false
        });
        this.toggleForm();

    }

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggleForm}>SignUp </Button>

                <Modal isOpen={this.state.selected} toggle={this.toggleForm}
                       className={this.props.className} size="lg">
                    <ModalHeader toggle={this.toggleForm}> SignUp: </ModalHeader>
                    <ModalBody>
                        <SignUpForm reloadHandler={this.reload}/>
                    </ModalBody>
                </Modal>



            </div>
        )

    }
}

export default SignUpContainer;