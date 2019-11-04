import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { home } from "./router.config.js"
class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={home}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
