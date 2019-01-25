import React from 'react'


const card_header = (props) => {

    return (
        <div className="card-header border-success" style={{color: "white", backgroundColor : "green"}}>
            <div>{props.gameType} </div>
        </div>
    )

}

export default card_header;