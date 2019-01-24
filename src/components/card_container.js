import React, {Component} from 'react'
import Header from '../components/card_header'
import Body from '../components/card_body'


class Card_Container extends Component {

    render() {
        return (
            <div className="card border-success ">
                <Header />
                <Body />
            </div>
        )
    }

}

export default Card_Container;