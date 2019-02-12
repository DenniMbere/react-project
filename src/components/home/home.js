import React from "react";
import "../../../src/css/home.css"

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        };
    }

    /*
    componentDidMount() {

        fetch('http://localhost:8080/api/cli/stores')
            .then(res => res.json())
            .then(json => {
               this.setState({
                   isLoaded: true,
                   items: json
               })
            });
    }
    */
    render() {
        return (
            <div>

                HOME

            </div>
        );
    }
}

