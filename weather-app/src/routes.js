import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import WeatherApp from './App';


class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/climate" exact>
                            <WeatherApp/>
                        </Route>
                    </Switch>
                </Router>
                
            </div>
        );
    }
}

export default Routes;