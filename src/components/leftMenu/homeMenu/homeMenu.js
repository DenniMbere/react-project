import React from "react";

export default class HomeMenu extends React.Component{


    showSection() {
        if(sessionStorage.getItem('user')){
            return(
                <div>
                    <a href='/ecommerce'>
                        <table width="100%">
                            <tbody>
                            <tr>
                                <td width="40%" style={{paddingRight: 20}} className="text-right"><span className="menu-icon">-</span></td>
                                <td className="text-left">PRENOTA E RITIRA</td>
                            </tr>
                            </tbody>
                        </table>
                    </a>
                    <a href='/orders'>
                        <table width="100%">
                            <tbody>
                            <tr>
                                <td width="40%" style={{paddingRight: 20}} className="text-right"><span className="menu-icon">-</span></td>
                                <td className="text-left">ORDINI</td>
                            </tr>
                            </tbody>
                        </table>
                    </a>
                    <a href='/profile'>
                        <table width="100%">
                            <tbody>
                            <tr>
                                <td width="40%" style={{paddingRight: 20}} className="text-right"><span className="menu-icon">-</span></td>
                                <td className="text-left">PROFILO</td>
                            </tr>
                            </tbody>
                        </table>
                    </a>
                </div>
            )
        }
    }

    render(){

        let showSection = this.showSection();

        return(
            <div>
                <div>
                <a href='/stores'>
                    <table width="100%">
                        <tbody>
                        <tr>
                            <td width="40%" style={{paddingRight: 20}} className="text-right"><span className="menu-icon">-</span></td>
                            <td className="text-left">PUNTI VENDITA</td>
                        </tr>
                        </tbody>
                    </table>
                </a>
                </div>
                {showSection}
            </div>
        );
    }
}

