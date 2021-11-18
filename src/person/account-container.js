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
import * as API_USERS_SENSOR from "./api/sensor-api"
import * as API_USERS_LOGIN from "./api/person-api"
import DeviceTable from "./components/device-table";
import NavigationBarClient from "../navigation-bar-clients";

import * as API_MONITORED from "./api/monitored-api"
import MonitoredTable from "./components/monitored-table";
class AccountContainer extends React.Component {

    constructor(props) {
        super(props);
        this.reload = this.reload.bind(this);
        this.reload2 = this.reload2.bind(this);
        this.state = {
            username: localStorage.getItem("username"),
            selected: false,
            collapseForm: false,
            tableData: [],
            isLoaded: false,
            errorStatus: 0,
            error: null,
            value: '',
            sensor_id: '',
            tableData2: [],
            isLoaded2: false,
            errorStatus2: 0,
            error2: null,
        };
        
    }

    

    reload() {
        this.setState({
            isLoaded: false,
        });
        this.fetchSensors();
    }
    
    reload2() {
        this.setState({
            isLoaded2: false
        });
       
    }



    componentDidMount() {
        this.fetchSensors();
        this.fetchMonitored();
    }

    fetchSensors() {
        let person = {
            name: this.state.username
        };
        return API_USERS_SENSOR.getSensorValue(person, (result, status, err) => {
            if (result !== null && status === 200) { 
                this.setState({ ...this.state,                              
                    tableData: [result],
                    value: result.max_value,
                    
                    isLoaded: true
                });
                setTimeout(() => {
                    this.setState({sensor_id:  result.id,},
                    function(){
                       console.log(this.state.sensor_id);
                       this.fetchMonitored();
                    });
                }, 10)
                
            } else {
                this.setState(({
                    errorStatus2: status,
                    error2: err
                }));
            }
        });
    }

    fetchMonitored() {
        let monitored = {
            sensor_id: this.state.sensor_id
        };
        return API_MONITORED.getMonitoredValuesBySensor(monitored, (result, status, err) => {

            if (result !== null && status === 200) {
                this.setState({
                    tableData2: result,
                    isLoaded2: true
                });
            } else {
                this.setState(({
                    errorStatus: status,
                    error: err
                }));
            }
        });
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
                            {this.state.isLoaded && <AccountTable tableData = {this.state.tableData} />}
                            
                        </Col>
                        <Col sm={{size: '8', offset: 1}}>
                            {this.state.isLoaded2 && <MonitoredTable tableData2 = {this.state.tableData2} />}
                           
                        </Col>
                    </Row>
                </Card>





            </div>
        )

    }
}


export default AccountContainer;
