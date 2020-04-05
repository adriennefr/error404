import React from 'react';
import './style.css'


function FemaleSignUp({ selected, onClick }) {

    return (
        selected ? <img alt="female avatar" className="femaleSignUp selected" src={'/images/female.png'} /> :
            <img onClick={() => onClick()} alt="female avatar" className="femaleSignUp" src={'/images/female.png'} />

    )
}

export default FemaleSignUp;
