import React from "react";
import ProfileService from "../service/profileService";

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: JSON.parse(localStorage.getItem("user"))
        };
        this.onChange = this.onChange.bind(this);
        this.onCheck = this.onCheck.bind(this);
        this.profileService = new ProfileService();
    }

    onChange(e) {
        this.setState(Object.assign(this.state.profile, {[e.target.name]: e.target.value}));
    }

    onCheck(e) {
        this.setState(Object.assign(this.state.profile, {[e.target.name]: e.target.checked}));
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.profile);
        this.profileService.update(this.state.profile);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <br/><br/>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <label>Nome</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="form-control"
                                    value={this.state.profile.firstName}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="col-sm-6">
                                <label>Cognome</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="form-control"
                                    value={this.state.profile.lastName}
                                    onChange={this.onChange}
                                />
                            </div>
                        </div>
                        <p>&nbsp;</p>
                        <div className="row">
                            <div className="col-sm-6">
                                <label>Codice fiscale</label>
                                <input
                                    type="text"
                                    name="ssnCode"
                                    className="form-control"
                                    value={this.state.profile.ssnCode}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="col-sm-6">
                                <label>Numero di telefono</label>
                                <input
                                    type="text"
                                    name="mobilePhone"
                                    className="form-control"
                                    value={this.state.profile.mobilePhone}
                                    onChange={this.onChange}
                                />
                            </div>
                        </div>
                        <p>&nbsp;</p>
                        <div className="row">
                            <div className="col-sm-6">
                                <label>Carta fedeltà</label>
                                <input
                                    type="text"
                                    name="principalCard"
                                    className="form-control"
                                    value={this.state.profile.principalCard}
                                    onChange={this.onChange}
                                />
                            </div>
                        </div>
                    </div>
                    <p>&nbsp;</p>
                    <div className="container">
                        <br/>
                        <div className="form-group">
                            <label>
                                <strong>Condizioni di servizio</strong>
                            </label>
                            <div className="row">
                                <div className="col-sm-11">
                                    <label>
                                        Dichiaro di aver letto e di accettare integralmente i termini e le condizioni di
                                        servizio indicati nell'informativa per la registrazione al servizio SmartBip.
                                        In mancanza del mio consenso i servizi non potranno essere erogati.
                                    </label>
                                </div>
                                <div className="col-sm-1">
                                    <input
                                        type="checkbox"
                                        name="accept1"
                                        className="form-control"
                                        required disabled checked
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
                                        Dichiaro di aver letto la Privacy Policy indicata nell'informativa per la
                                        registrazione al servizio
                                        SmartBip e di esprimere il mio consenso al trattamento dei miei dati per le
                                        finalità in essa indicate.<br/>
                                        In mancanza del mio consenso, i servizi non potranno essere erogati.
                                    </label>
                                </div>
                                <div className="col-sm-1">
                                    <input
                                        type="checkbox"
                                        name="accept2"
                                        className="form-control"
                                        required disabled checked
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-sm-11">
                                    <label>
                                        Letta l'informativa, esprimo inoltre il mio consenso a che i dati da me forniti
                                        siano utilizzati per l'invio
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
                                        Letta l'informativa, esprimo inoltre il mio consenso per la comunicazione a
                                        terzi dei miei dati per fini promozionali.<br/>
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
                    </div>

                </form>

            </div>
        );
    }
}

