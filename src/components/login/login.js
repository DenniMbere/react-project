import React from "react";
import ProfileService from "../service/profileService";
import {Redirect} from 'react-router-dom';
import HomeMenu from "../leftMenu/homeMenu/homeMenu";

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: false
        };

        this.onChange = this.onChange.bind(this);
        this.profileService = new ProfileService();
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        this.profileService.login(
            this.state,
            this.onSuccess.bind(this),
            this.onError.bind(this)
        );
    }

    onSuccess(data) {
        if (data) {
            let profile = {
                firstName: data.data.firstName,
                lastName: data.data.lastName,
                ssnCode: data.data.ssnCode,
                mobilePhone: data.data.mobilePhone,
                principalCard: data.data.principalCard,
                accept3: data.data.accept3,
                accept4: data.data.accept4,
            }
            localStorage.setItem('user', JSON.stringify(profile));
            this.setState({redirect: true});
        }
    }

    onError(data) {
        console.log('errore');
    }


    render() {

        if (this.state.redirect) {
            return <Redirect to='/'/>
        }

        if (localStorage.getItem("user")) {
            return <Redirect to='/'/>
        }

        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="row" style={{backgroundColor: "white", minHeight: 1040}}>
                        <div className="col-md-3 col-sm-3 nopadding left-side-menu">
                            <div>
                                <HomeMenu/>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-9 nopadding">
                            <div className="col-6 mr-auto ml-auto">
                                <br/>
                                <h1>Accedi</h1>
                                <br/>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="username"
                                        className="form-control"
                                        value={this.state.username}
                                        onChange={this.onChange}
                                        autoComplete="true"
                                        placeholder="Email*"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                        autoComplete="true"
                                        placeholder="Password*"
                                        required
                                    />
                                </div>
                                <br/>
                                <div className="form-group">
                                    <button className="btn btn-primary btn-block bnt-lg">Invia</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

