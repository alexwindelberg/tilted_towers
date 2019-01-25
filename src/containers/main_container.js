import React, { Component } from 'react';
import '../styles/custom.scss'
import Card from '../hoc/card/card_generator'

class Table extends Component {
    render () {
        return (
            <div className="layout-container">
                <div className="table" >
                    <Card />
                </div>
            </div>
        )
    }

}

export default Table;
