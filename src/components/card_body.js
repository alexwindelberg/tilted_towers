import React from 'react';
import { Table } from 'reactstrap'

/*
    The idea here is that we are able to organize the data
    in a table format but we will need to create a component
    to organize the tuples. It's possible to do here but it will
    be simpler.
*/
const card_body = () => (
    <Table dark>
        <thead>
            <tr>
                <th>Wins</th>
                <th>Win Rate</th>
                <th>Matches</th>
            </tr>
            <tr>
                <th>Top 10</th>
                <th>K/D Ratio</th>
                <th>Kills</th>
            </tr>
        </thead>


    </Table>
)

export default card_body