import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <React.Fragment>
            <Link to="/authors"><h1> Authors </h1></Link>
            <Link to="/books"><h1> Books </h1></Link>
        </React.Fragment>
    )
}

export default Home;