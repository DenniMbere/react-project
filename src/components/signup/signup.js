import React from "react";
import ProfileService from "../service/profileService";
import HomeMenu from "../leftMenu/homeMenu/homeMenu";

export default class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordConfirmation: '',
            profile: {
                accept1: true,
                accept2: true,
                accept3: null,
                accept4: null,
                email: ""
            },
            showSuccess: false,
            showError: false,
            errorMessage: "",
            successMessage: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onCheck = this.onCheck.bind(this);
        this.profileService = new ProfileService();
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onCheck(e) {
        this.setState(Object.assign(this.state.profile, {[e.target.name]: e.target.checked}));
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.password === this.state.passwordConfirmation) {
            this.profileService.signup(
                this.state.profile,
                this.state.username,
                this.state.password,
                this.signupSuccess.bind(this),
                this.signupError.bind(this)
            );
        } else {
            console.error("password e conferma password sono diversi");
        }
    }

    signupSuccess(data) {
        this.setState({
            showSuccess: true,
            successMessage: "Complimenti per la registrazione",
            showError: false,
            errorMessage: ""
        });
    }

    signupError(data) {
        this.setState({
            showError: true,
            errorMessage: "Errore durante la registrazione",
            showSuccess: false,
            successMessage: ""
        });
    }

    getSuccessMessage() {
        if (this.state.showSuccess) {
            return (
                <div style={{color: "green"}}>
                    {this.state.successMessage}
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    getErrorMessage() {
        if (this.state.showError) {
            return (
                <div style={{color: "red"}}>
                    {this.state.errorMessage}
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        let successMessage = this.getSuccessMessage();
        let errorMessage = this.getErrorMessage();
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
                                <h1>Registrati</h1>
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
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="passwordConfirmation"
                                        className="form-control"
                                        value={this.state.passwordConfirmation}
                                        onChange={this.onChange}
                                        autoComplete="true"
                                        placeholder="Conferma password*"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="container">
                                <br/>
                                <div className="form-group">
                                    <label>
                                        <strong>Condizioni di servizio</strong>
                                    </label>
                                    <div className="row">
                                        <div className="col-sm-11">
                                            <label>
                                                Dichiaro di aver letto e di accettare integralmente i termini e le
                                                condizioni di
                                                servizio indicati nell'informativa per la registrazione al servizio
                                                SmartBip.
                                                In mancanza del mio consenso i servizi non potranno essere erogati.
                                            </label>
                                        </div>
                                        <div className="col-sm-1">
                                            <input
                                                type="checkbox"
                                                name="accept1"
                                                className="form-control"
                                                onChange={this.onCheck}
                                                disabled
                                                checked
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>
                                        <strong>Privacy</strong>
                                    </label>
                                    <div className="row">
                                        <div className="col-sm-11">
                                            <label>
                                                Dichiaro di aver letto la Privacy Policy indicata nell'informativa per
                                                la registrazione al servizio
                                                SmartBip e di esprimere il mio consenso al trattamento dei miei dati per
                                                le finalità in essa indicate.<br/>
                                                In mancanza del mio consenso, i servizi non potranno essere erogati.
                                            </label>
                                        </div>
                                        <div className="col-sm-1">
                                            <input
                                                type="checkbox"
                                                name="accept2"
                                                className="form-control"
                                                onChange={this.onCheck}
                                                disabled
                                                checked
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-sm-11">
                                            <label>
                                                Letta l'informativa, esprimo inoltre il mio consenso a che i dati da me
                                                forniti siano utilizzati per l'invio
                                                di informazioni ed offerte commerciali anche di terzi. Il consenso è
                                                facoltativo.
                                            </label>
                                        </div>
                                        <div className="col-sm-1">
                                            <input
                                                type="checkbox"
                                                name="accept3"
                                                className="form-control"
                                                onChange={this.onCheck}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-sm-11">
                                            <label>
                                                Letta l'informativa, esprimo inoltre il mio consenso per la
                                                comunicazione a terzi dei miei dati per fini promozionali.<br/>
                                                Il consenso è facoltativo.
                                            </label>
                                        </div>
                                        <div className="col-sm-1">
                                            <input
                                                type="checkbox"
                                                name="accept4"
                                                className="form-control"
                                                onChange={this.onCheck}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <div className="form-group">
                                    <button className="btn btn-primary btn-block bnt-lg">Invia</button>
                                </div>
                                {successMessage}
                                {errorMessage}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

