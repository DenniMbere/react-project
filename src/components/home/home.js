import React from "react";
import "../../../src/css/home.css"
import {Redirect} from 'react-router-dom'
import HomeMenu from "../leftMenu/homeMenu/homeMenu";

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
    }

    componentDidMount() {

        console.log(document.cookie);
        if (localStorage.getItem("user")) {
            //do something
        } else {
            this.setState({redirect: true});
        }
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to='/login'/>
        }

        return (
            <div>
                <div className="row" style={{backgroundColor: "white", minHeight: 1040}}>
                    <div className="col-md-3 col-sm-3 nopadding left-side-menu">
                        <div>
                            <HomeMenu/>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-9 nopadding">
                        HOME
                    </div>
                </div>
            </div>
        );
    }
}

