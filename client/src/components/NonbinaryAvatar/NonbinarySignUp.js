import React from 'react';
import './style.css'


function NonbinarySignUp({ selected, onClick }) {
    return (
        selected ? <img alt="nonbinary avatar" className="nonbinarySignUp selected avatar" src={'/images/clicked-nonbinary.png'} />
            : <img onClick={() => onClick()} alt="nonbinary avatar" className="nonbinarySignUp avatar" src={'/images/non.JPG'} />
    )
}

export default NonbinarySignUp;
