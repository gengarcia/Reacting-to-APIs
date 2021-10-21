import React from 'react';

export default (props) => {
    return (
        <div 
            className="card w-30 align-items-center justify-content-center text-align-center" 
            style={{width: '14rem', textAlign: 'center' }}>
                <div className="card-body">
                    <h3 className="card-title text-info">{props.name}</h3>
                    <h5 className="card-text" id="director">{props.age}</h5>
                    <p className="card-text text-muted">{props.gender}</p>
                    <a href={props.url} target="_blank" rel="noopener noreferrer">click me</a>
                </div>
        </div>
    )
}
