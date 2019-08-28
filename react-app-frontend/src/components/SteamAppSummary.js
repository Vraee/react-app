import React from 'react';

const SteamAppSummary = ({ app, className, onClick }) => {
    return(
        <div className={ className } onClick={ onClick }>
            <h2>{ app.name }</h2>
            <p>{ `Type: ${ app.type !== undefined ? app.type : 'UNKNOWN' }` }</p>
            <p>{ `Developer: ${ app.developers !== undefined ? app.developers[0] : 'UNKNOWN '}` }</p>
            <p>{ `Publisher: ${ app.publishers !== undefined ? app.publishers[0] : 'UNKNOWN' }` }</p>
            <p>{ `Metacritic: ${ app.metacritic !== undefined ? app.metacritic.score : 'UNKNOWN' }` }</p>
            <p>{ app.short_description !== undefined ? app.short_description : null }</p>
        </div>
    );
};

export default SteamAppSummary;