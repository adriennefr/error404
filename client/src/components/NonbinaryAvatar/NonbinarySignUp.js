import React from 'react';
import './style.css'


function NonbinarySignUp({ selected, onClick }) {
    return (
        selected ? <img alt="nonbinary avatar" className="nonbinarySignUp selected" src={'/images/non.jpg'} />
            : <img onClick={() => onClick()} alt="nonbinary avatar" className="nonbinarySignUp" src={'/images/non.jpg'} />
    )
}

export default NonbinarySignUp;
