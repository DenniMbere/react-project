import React from "react";
import BackMenu from "../backMenu/backMenu";

export default class EcommerceMenu extends React.Component {

    render() {
        let lists = this.props.lists;
        return (
            <div>
                <BackMenu/>
                <br/>
                <h5>Le tue liste:</h5>
                <br/>
                <div className="container">
                    {lists.map(list => (
                        <div className="row" key={list.id}>
                            <div className="col-sm-6">
                                <h5>{list.title}</h5>
                                <label>Ultima modifica: {list.updated}</label>
                                <label>Numero prodotti: {list.itemsCount}</label>
                                <label>Stato: {list.status}</label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

