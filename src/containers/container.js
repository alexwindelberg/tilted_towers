import React, { Component } from 'react';
import Layout from '../hoc/Layout/layout'
import '../styles/custom.scss'

class Container extends Component {
    render () {
        return (
            <div className="layout-container">
                <div className="table" >
                    <div className="row">
                        <Layout />
                    </div>
                </div>
            </div>
        )
    }

}

export default Container;
