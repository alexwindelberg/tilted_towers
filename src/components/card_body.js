import React from 'react';
import { Table } from 'reactstrap'

/*
    The idea here is that we are able to organize the data
    in a table format but we will need to create a component
    to organize the tuples. It's possible to do here but it will
    be simpler.
*/
const card_body = () => (
    <div className="card-body bg-dark">
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">K/D Ratio : </th>
                    <th scope="col">Wins : </th>
                </tr>
            </thead>
        <tbody>
            <tr>
                <td>Wins</td>
                <td>Top 10</td>
            </tr>
            <tr>
                <td>Win Rate</td>
                <td>K/D Ratio</td>
            </tr>
            <tr>
                <td>Matches</td>
                <td>Kills</td>
            </tr>
  </tbody>
        </table>
    </div>
)

export default card_body