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
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
)

export default card_body