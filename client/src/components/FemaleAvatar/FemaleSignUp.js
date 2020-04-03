import React from 'react';
import female from '../../assets/images/female.png'
import './style.css'


function FemaleSignUp({ selected, onClick }) {

    return (
        selected ? <img alt="female avatar" className="femaleSignUp selected" src={female} /> :
            <img onClick={() => onClick()} alt="female avatar" className="femaleSignUp" src={female} />

    )
}

export default FemaleSignUp;