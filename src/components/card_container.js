import React from 'react'
import Header from '../components/card_header'
import Body from '../components/card_body'


const Card_Container = (props) => {

        return (
            <div className="card border-success">
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