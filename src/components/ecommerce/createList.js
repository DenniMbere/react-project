import React from "react";
import "../../../src/css/home.css"
import {Redirect} from 'react-router-dom'
import EcommerceService from "../service/ecommerceService";
import BackMenu from "../leftMenu/backMenu/backMenu";

export default class CreateList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            storeId: "",
            storeName: "",
            deliveryMode: "",
            addressId: "",
            redirect: false,
            stores: [],
            isLoaded: false,
        };
        this.onChange = this.onChange.bind(this);
        this.onCheck = this.onCheck.bind(this);
        this.selectStore = this.selectStore.bind(this);
        this.ecommerceService = new EcommerceService();
    }

    componentDidMount() {
        if (localStorage.getItem("user")) {
            fetch('http://localhost:8080/api/cli/stores')
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        stores: json,
                        isLoaded: true,
                        storeId: json.data[0].id,
                        storeName: json.data[0].name,
                    })
                });
        } else {
            this.setState({redirect: true});
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

    selectStore(store) {
        this.setState({
            storeId: store.id,
            storeName: store.name,
        });
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to='/login'/>
        }

        let {isLoaded, stores, storeName} = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        } else {

            return (
                <div>
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="row" style={{backgroundColor: "white", minHeight: 1040}}>
                            <div className="col-md-3 col-sm-3 nopadding left-side-menu">
                                <div>
                                    <BackMenu/>
                                </div>
                            </div>
                            <div className="col-md-9 col-sm-9 nopadding">
                                <div className="row">
                                    <div className="col-4 mr-auto ml-auto">
                                        <br/>
                                        <h3 className='text-center'>Crea lista</h3>
                                        <br/>
                                        <h6>Imposta il nome della lista</h6>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="title"
                                                className="form-control"
                                                value={this.state.title}
                                                onChange={this.onChange}
                                                autoComplete="true"
                                            />
                                        </div>
                                        <br/>
                                        <h6>Modalità di consegna</h6>
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                name="deliveryMode"
                                                className="form-check-input"
                                                value="IN_STORE"
                                                onChange={this.onChange}
                                                required/>
                                            <label className="form-check-label">Ritiro in negozio</label>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <div className="col-8 mr-auto ml-auto">
                                    <h6 className='text-center'>Punto Vendita selezionato: {storeName}</h6>
                                </div>
                                <div className="col-4 mr-auto ml-auto">
                                    <button type="button" className="btn btn-primary" data-toggle="modal"
                                            data-target="#exampleModal">Cambia punto vendita
                                    </button>
                                </div>
                                <br/>
                                <br/>
                                <div className="row">
                                    <div className="col-2 mr-auto ml-auto">
                                        <div className="form-group">
                                            <button className="btn btn-primary btn-block bnt-lg">Crea lista</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Seleziona un punto vendita</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="container">
                                        {stores.data.map(store => (
                                            <div className="row" key={store.id}>
                                                <div className="col-sm-4">
                                                    <a href="#" className="color-inherit" data-dismiss="modal"
                                                       onClick={() => this.selectStore(store)}>
                                                        <img src={store.logoImageThumbnailUrl}
                                                             className="img-responsive"/>
                                                    </a>
                                                </div>
                                                <div className="col-sm-8">
                                                    <a href="#" className="color-inherit" data-dismiss="modal"
                                                       onClick={() => this.selectStore(store)}>
                                                        <h5>{store.name}</h5>
                                                        <p>{store.address.address}<br/>
                                                            {store.address.zip}
                                                            - {store.address.city} {store.address.county}</p>
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Chiudi
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

