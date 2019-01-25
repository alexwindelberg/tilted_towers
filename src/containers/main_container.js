import React, { Component } from 'react';
import Header from '../components/header';
import '../styles/custom.scss'
import Card_Generator from '../hoc/card/card_generator'

class Table extends Component {
    render () {
        return (
            <div className="layout-container">
                <Header />
                <Card_Generator />
            </div>
        )
    }

}

export default Table;
