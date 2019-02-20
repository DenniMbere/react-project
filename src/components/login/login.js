import React from "react";
import ProfileService from "../service/profileService";
import {Redirect} from 'react-router-dom';

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
        if(data) {
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

        if(this.state.redirect) {
            return <Redirect to='/'/>
        }

        if(localStorage.getItem("user")) {
            return <Redirect to='/'/>
        }

        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="container">
                        <div className="row">
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
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-6 mr-auto ml-auto">
                                <div className="form-group">
                                    <button className="btn btn-primary btn-block bnt-lg">Accedi</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

