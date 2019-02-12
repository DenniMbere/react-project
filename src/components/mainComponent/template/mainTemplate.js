import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import LeftMenu from "../../leftMenu/leftMenu";

export default class MainTemplate extends React.Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <div className="row" style={{backgroundColor: "white", height: 1040}}>
                    <div className="col-md-3 col-sm-3 nopadding left-side-menu">
                        <div>
                            <LeftMenu/>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-9 nopadding">
                    {this.props.children}
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}