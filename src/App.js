import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import MainTemplate from './components/mainComponent/template/mainTemplate';
import Home from './components/home/home';
import Stores from "./components/stores/stores";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <MainTemplate>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/stores' component={Stores}/>
                    </Switch>
                </MainTemplate>
            </BrowserRouter>
        );
    }
}

export default App;
