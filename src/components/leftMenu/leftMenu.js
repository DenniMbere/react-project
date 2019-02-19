import React from "react";
import {Route, Switch} from "react-router-dom";
import HomeMenu from "./homeMenu/homeMenu";

export default class LeftMenu extends React.Component{

    render(){
        return(
            <Switch>
                <Route exact path='/' component={HomeMenu}/>
                <Route exact path='/stores' component={HomeMenu}/>
                <Route exact path='/login' component={HomeMenu}/>
                <Route exact path='/signup' component={HomeMenu}/>
                <Route exact path='/profile' component={HomeMenu}/>
                <Route exact path='/ecommerce' component={HomeMenu}/>
                <Route exact path='/orders' component={HomeMenu}/>
            </Switch>
        );
    }
}

