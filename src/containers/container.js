import React, { Component } from 'react';
import Layout from './layout'
import '../styles/custom.scss'

class Container extends Component {
    render () {
        return (
            <div className="table-container">
                <Layout />
            </div>
        )
    }

}

export default Container;
