import React from "react";
import "../../../src/css/home.css"
import {Redirect} from 'react-router-dom'

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
    }

    componentWillMount() {

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
                HOME
            </div>
        );
    }
}

