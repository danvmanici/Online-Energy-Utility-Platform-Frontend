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

import AccountTable from "./components/account-table";

import * as API_USERS from "./api/device-api"
import * as API_USERS_LOGIN from "./api/person-api"
import DeviceTable from "./components/device-table";
import NavigationBarClient from "../navigation-bar-clients";



class AccountContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: localStorage.getItem("username"),
            selected: false,
            collapseForm: false,
            tableData: [],
            isLoaded: false,
            errorStatus: 0,
            error: null
        };

    }


    render() {
        return (
            <div>
                <NavigationBarClient/>
                <CardHeader>
                    <strong> Welcome {this.state.username}</strong>
                </CardHeader>
                <Card>
                    <br/>

                    <Row>
                        <Col sm={{size: '8', offset: 1}}>
                            {this.state.isLoaded && <AccountTable tableData = {this.state.tableData}/>}
                            {this.state.errorStatus > 0 && <APIResponseErrorMessage
                                errorStatus={this.state.errorStatus}
                                error={this.state.error}
                            />   }
                        </Col>
                    </Row>
                </Card>





            </div>
        )

    }
}


export default AccountContainer;
