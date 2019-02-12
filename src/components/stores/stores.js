import React from "react";
import "../../../src/css/stores.css"

export default class Stores extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        };
    }

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

    render() {

        var {isLoaded, items } = this.state;

        console.log(items);

        if(!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="col-md-5">

                    <div className="store">
                        <table className="table-full-width">
                            <tbody>
                            {items.data.map(item =>(
                                <tr key={item.id}>
                                    <td>
                                        <h4>{item.name}</h4>

                                        <div>
                                            <img src={item.logoImageUrl} className="img-responsive store-logo"/>
                                        </div>

                                    </td>
                                    <td><h2 className="text-muted">&gt;</h2></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            );
        }

    }
}

