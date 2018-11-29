import React from 'react';
import loadingGif from '../loading.gif';

const Loading = () => {
    return (
        <React.Fragment>
            <img alt="loading gif" src={loadingGif}/>
        </React.Fragment>
    )
}

export default Loading;