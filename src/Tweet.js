import React from 'react';

function Tweet(param) {
    return (
        <div className="tweet">
            <h3>{param.name}</h3>
            <p>{param.msg}</p>
            <p>{param.age}</p>
            <h3>{param.likes}</h3>
        </div>

    );
}

export default Tweet;