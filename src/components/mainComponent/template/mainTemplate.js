import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

export default class MainTemplate extends React.Component{
    render(){
        return(
            <div className="container">
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}