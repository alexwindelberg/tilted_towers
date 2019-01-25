import React, { Component } from 'react';
import Header from '../components/header';
import '../styles/custom.scss'
import Card_Generator from '../hoc/card/card_generator'

/*
    The main container is more like my middle man as it just helped route a little
    I also had plans to add more to this component but was only able to add the
    header
*/

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
