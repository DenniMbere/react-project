import React from "react";
import ProfileService from "../service/profileService";

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.onChange = this.onChange.bind(this);
        this.signupService = new ProfileService();
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e) {
        e.preventDefault();
        this.signupService.login(
            this.state.username,
            this.state.password
        )
    }

    render() {
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

