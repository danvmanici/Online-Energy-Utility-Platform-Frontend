import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavigationBar from './navigation-bar'
import Home from './home/home';
import PersonContainer from './person/person-container'
import DeviceContainer from "./person/device-container";
import SensorContainer from "./person/sensor-container";
import LoginContainer from "./person/login-container";

import ErrorPage from './commons/errorhandling/error-page';
import styles from './commons/styles/project-style.css';

class App extends React.Component {


    render() {

        return (
            <div className={styles.back}>
            <Router>
                <div>
                    <NavigationBar />
                    <Switch>

                        <Route
                            exact
                            path='/'
                            render={() => <Home/>}
                        />

                        <Route
                            exact
                            path='/client'
                            render={() => <PersonContainer/>}
                        />

                        <Route
                            exact
                            path='/device'
                            render={() => <DeviceContainer/>}
                        />

                        <Route
                            exact
                            path='/sensor'
                            render={() => <SensorContainer/>}
                        />



                        {/*Error*/}
                        <Route
                            exact
                            path='/error'
                            render={() => <ErrorPage/>}
                        />

                        <Route render={() =><ErrorPage/>} />
                    </Switch>
                </div>
            </Router>
            </div>
        )
    };
}

export default App
