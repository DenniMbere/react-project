import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import MainTemplate from './components/mainComponent/template/mainTemplate';
import Home from './components/home/home';
import Stores from "./components/stores/stores";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <MainTemplate>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/stores' component={Stores}/>
                        <Route exact path='/signup' component={Signup}/>
                        <Route exact path='/login' component={Login}/>
                    </Switch>
                </MainTemplate>
            </BrowserRouter>
        );
    }
}

export default App;
