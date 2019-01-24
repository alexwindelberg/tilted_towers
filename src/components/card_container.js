import React, {Component} from 'react'
import Header from '../components/card_header'
import Body from '../components/card_body'

import { StyledContainer } from '../styles/_container'

class Card_Container extends Component {

    render() {
        return (
            <StyledContainer>
                <p> Hello World </p>
            </StyledContainer>
        )
    }

}

export default Card_Container;