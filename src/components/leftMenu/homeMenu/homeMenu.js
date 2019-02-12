import React from "react";

export default class HomeMenu extends React.Component{

    render(){
        return(
            <div>
                <ul>
                    <li><a href='stores'>
                        <table width="100%">
                            <tbody>
                            <tr>
                                <td width="40%" style={{paddingRight: 20}} className="text-right"><span className="menu-icon">-</span></td>
                                <td className="text-left">PUNTI VENDITA</td>
                            </tr>
                            </tbody>
                        </table>
                    </a></li>
                </ul>
            </div>
        );
    }
}

