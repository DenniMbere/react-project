import React from "react";
import {Route, Switch} from "react-router-dom";
import HomeMenu from "./homeMenu/homeMenu";
import GoBackMenu from "./goBackMenu/goBackMenu";

export default class LeftMenu extends React.Component{

    render(){
        return(
            <Switch>
                <Route exact path='/' component={HomeMenu}/>
                <Route exact path='/stores' component={GoBackMenu}/>
                <Route exact path='/login' component={HomeMenu}/>
                <Route exact path='/signup' component={HomeMenu}/>
                <Route exact path='/profile' component={GoBackMenu}/>
                <Route exact path='/ecommerce' component={HomeMenu}/>
                <Route exact path='/ecommerce/create' component={GoBackMenu}/>
                <Route exact path='/orders' component={GoBackMenu}/>
            </Switch>
        );
    }
}

