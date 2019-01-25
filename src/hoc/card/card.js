import React from 'react'
import Card_Container from '../../components/card_container'


const card = (props) => {
    return <Card_Container  gameType={props.gameType}
                            kdratio={props.kdratio}
                            wins={props.wins}
                            score={props.score}
                            winRate={props.winRate}
                            kills={props.kills}
                            matchesPlayed={props.matchesPlayed}/> 
}

export default card

/*
const card = (props) => props.data.map( (data, index ) =>  {
        return <Card_Container gameType={props.gameType}/>    
});*/