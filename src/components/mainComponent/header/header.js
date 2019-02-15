import React from "react";
import "../../../css/header.css"
import SigmaLogo from "../../../images/sigma-icon-1024-1024.png";

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.logout = this.logout.bind(this);
    }

    navbarContent() {
        if (sessionStorage.getItem("user")) {
            let user = JSON.parse(sessionStorage.getItem("user"));
            return (
                <div className="navbar-nav">
                    <p className="nav-item">Benvenuto
                        <a href="/profile" className="nav-item profile-link"> {user.firstName}</a>
                        <a href="/login" className="nav-item" onClick={this.logout}>[esci]</a>
                    </p>
                </div>
            )
        } else {
            return (
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/login">Login</a>
                    <a className="nav-item nav-link" href="/signup">Registrazione</a>
                </div>
            )
        }
    }

    logout() {
        sessionStorage.clear();
    }

    render() {

        let navbarContent = this.navbarContent();
        return (
            <div className="row" style={{backgroundColor: "white"}}>
                <div className="col-md-3 col-sm-3 nopadding left-side-menu">
                    <div className="menu-logo-container">
                        <img src={SigmaLogo} className="img img-responsive menu-logo"/>
                    </div>
                </div>
                <div className="col-md-9 col-sm-9 nopadding">
                    <nav className="navbar navbar-inverse fixed-top navbar-expand-lg">
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav mr-auto">
                                <a className="nav-item nav-link" href="/#home">HOME</a>
                                <a className="nav-item nav-link" href="/ecommerce">PRENOTA E RITIRA</a>
                                <a className="nav-item nav-link" href="/stores">PUNTI VENDITA</a>
                            </div>
                            {navbarContent}
                        </div>
                    </nav>
                    <div className="col-md-12">
                        <ol>
                            <h5 className="active">HOME</h5>
                        </ol>
                        <hr></hr>
                    </div>
                </div>
            </div>
        );
    }
}