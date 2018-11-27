import React from 'react';
import {Link} from 'react-router-dom';

const Error = () => {
    return (
        <React.Fragment>
            <h1>Oops! There is no such path.</h1>
            <p> Try to go <Link to="/"> Home </Link></p>
        </React.Fragment>
    )
}

export default Error;