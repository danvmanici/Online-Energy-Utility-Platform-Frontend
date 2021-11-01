import React, {Component} from 'react';
import {Link} from "react-router-dom";
import NavigationBar from "../../navigation-bar";

class Admin extends Component {


    render() {
        return (
            <div>
                <NavigationBar />
                <h1><center>Admin</center> </h1>
            </div>
        );
    }
}

export default Admin;