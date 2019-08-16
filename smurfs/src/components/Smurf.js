import React from 'react';

export const Smurf = props => {
    console.log('Smurf', props)

    return (
        <div>
            <h2>props.smurf.name</h2>
            <p>props.smurf.age</p>
            <p>props.smurf.height</p>
        </div>
    )
}