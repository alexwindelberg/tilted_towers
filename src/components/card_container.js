import React from 'react'
import Header from '../components/card_header'
import Body from '../components/card_body'

/*
    The card container was meant to group and head and the Body together
    allowed me the ability to split the data to be sent to its own place
    but I had considered adding more information to the card and this
    component would have allowe me to do it cleanly
*/

const Card_Container = (props) => {

        return (
            <div className="card ">
                <Header gameType={props.gameType} />
                <Body 
                    kdratio={props.kdratio}
                    wins={props.wins}
                    score={props.score}
                    winRate={props.winRate}
                    kills={props.kills}
                    matchesPlayed={props.matchesPlayed}
                    />
            </div>
        )
}


export default Card_Container;