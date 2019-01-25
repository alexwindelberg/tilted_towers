import React from 'react';
/*
    The idea here is that we are able to organize the data
    in a table format but we will need to create a component
    to organize the tuples. It's possible to do here but it will
    be simpler.
*/
const card_body = (props) => (
    <div className="card-body bg-dark">
        <table className="table table-dark">
            <thead style={{background : "#EA2774"}}>
                <tr>
                    <th scope="col">K/D Ratio :  <br /> {props.kdratio} </th>
                    <th scope="col">Wins      :  <br /> {props.wins}    </th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>Wins      :  <br />  {props.wins}           </td>
                        <td>Score     :  <br />  {props.score}          </td>
                    </tr>
                    <tr>
                        <td>Win Rate  :  <br />   {props.winRate}       </td>
                        <td>K/D Ratio :  <br />   {props.kdratio}       </td>
                    </tr>
                    <tr>
                        <td>Matches   :  <br />   {props.matchesPlayed} </td>
                        <td>Kills     :  <br />   {props.kills}         </td>
                    </tr>
            </tbody>
            </table>
    </div>
)

export default card_body