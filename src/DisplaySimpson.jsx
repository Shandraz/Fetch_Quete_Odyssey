import React from 'react';

const DisplaySimpson = ({ simpson }) => {
    return (
        <div className="DisplaySimpson">
            <img src={simpson.image} alt="picture" />
            <ul>
                <li>
                    {simpson.character}
                </li>
                <li>{simpson.quote}</li>
            </ul>
        </div>
    );
};

export default DisplaySimpson;