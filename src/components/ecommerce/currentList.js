import React from "react";
import "../../../src/css/home.css"
import {Redirect} from 'react-router-dom'
import EcommerceService from "../service/ecommerceService";
import EcommerceMenu from "../leftMenu/ecommerceMenu/ecommerceMenu";

export default class CurrentList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loginRedirect: false,
            createRedirect: false,
            lists: [],
            isLoaded: false,
            cartId: "",
            currentList: ""
        };
        this.onChange = this.onChange.bind(this);
        this.ecommerceService = new EcommerceService();
    }

    componentDidMount() {
        if (localStorage.getItem("user")) {
            this.ecommerceService.openCarts()
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        lists: json.data,
                        isLoaded: true,
                        createRedirect: (json.data.length === 0),
                        cartId: json.data[0].id
                    });
                    if (this.state.cartId !== "") {
                        this.ecommerceService.review(this.state.cartId, true)
                            .then((response) => response.json())
                            .then((responseData) => {
                                console.log(responseData)
                                this.setState({
                                    currentList: responseData.data.cart
                                })
                            }).catch((error) => {
                            console.log(error);
                        })
                    }
                });
        } else {
            this.setState({loginRedirect: true});
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onCheck(e) {
        this.setState({[e.target.name]: e.target.checked});
    }

    onSubmit(e) {
        e.preventDefault();
        this.ecommerceService.open(this.state)
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData.responseCode === 0) {
                    console.log(responseData);
                    window.location = "/ecommerce";
                } else {
                    console.log(responseData);
                }
            }).catch((error) => {
            console.log(error);
        })
    }

    render() {

        if (this.state.loginRedirect) {
            return <Redirect to='/login'/>
        }
        if (this.state.createRedirect) {
            return <Redirect to='/ecommerce/create'/>
        }

        let {lists, currentList} = this.state;
        console.log(currentList);

        return (
            <div>
                <div className="row" style={{backgroundColor: "white", minHeight: 1040}}>
                    <div className="col-md-3 col-sm-3 nopadding left-side-menu">
                        <div>
                            <EcommerceMenu lists={lists}/>
                        </div>
                    </div>


                    <div className="col-md-9 col-sm-9 nopadding">

                        <span>{this.state.currentList.title}</span>

                    </div>
                </div>
            </div>
        )
    }
}

