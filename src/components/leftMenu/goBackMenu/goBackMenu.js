import React from "react";

export default class GoBackMenu extends React.Component{

    render(){
        return(
            <div>
                <div>
                    <a href='/'>
                        <table width="100%">
                            <tbody>
                            <tr>
                                <td width="40%" style={{paddingRight: 20}} className="text-right"><span className="menu-icon">-</span></td>
                                <td className="text-left">INDIETRO</td>
                            </tr>
                            </tbody>
                        </table>
                    </a>
                </div>
            </div>
        );
    }
}

