import React from 'react';
import './style.css'


function NonbinarySignUp({ selected, onClick }) {
    return (
        selected ? <img alt="nonbinary avatar" className="nonbinarySignUp selected" src={'/images/clicked-nonbinary.png'} />
            : <img onClick={() => onClick()} alt="nonbinary avatar" className="nonbinarySignUp" src={'/images/non.JPG'} />
    )
}

export default NonbinarySignUp;
