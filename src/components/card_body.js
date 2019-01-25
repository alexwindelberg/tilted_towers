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
            <thead>
                <tr>
                    <th scope="col">K/D Ratio :  {props.kdratio}</th>
                    <th scope="col">Wins :  {props.wins} </th>
                </tr>
            </thead>
        <tbody>
            <tr>
                <td>Wins :  {props.wins}</td>
                <td>Score :  {props.score}</td>
            </tr>
            <tr>
                <td>Win Rate :  {props.winRate}</td>
                <td>K/D Ratio :  {props.kdratio}</td>
            </tr>
            <tr>
                <td>Matches : {props.matchesPlayed}</td>
                <td>Kills : {props.kills}</td>
            </tr>
  </tbody>
        </table>
    </div>
)

export default card_body