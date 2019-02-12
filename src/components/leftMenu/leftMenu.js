import React from "react";
import {Route, Switch} from "react-router-dom";
import HomeMenu from "./homeMenu/homeMenu";
import Stores from "../stores/stores";

export default class LeftMenu extends React.Component{

    render(){
        return(
            <Switch>
                <Route exact path='/' component={HomeMenu}/>
                <Route exact path='/stores' component={HomeMenu}/>
            </Switch>
        );
    }
}

