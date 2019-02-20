import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import MainTemplate from './components/mainComponent/template/mainTemplate';
import Home from './components/home/home';
import Stores from "./components/stores/stores";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import Profile from "./components/profile/profile";
import CreateList from "./components/ecommerce/createList";

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
                        <Route exact path='/profile' component={Profile}/>
                        <Route exact path='/ecommerce' component={CreateList}/>
                    </Switch>
                </MainTemplate>
            </BrowserRouter>
        );
    }
}

export default App;
