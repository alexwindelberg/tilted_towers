import React, { Component } from 'react'
import Card from '../components/card_container'


class Layout extends Component {
    /* Need to pass the data here */
    render () {
        return (
            <div className="table" >
                <div className="row">
                    <div className="col-sm">
                        <Card/>
                    </div>
                    <div className="col-sm">
                        <Card/>
                    </div>
                    <div className="col-sm">
                        <Card/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Layout;
