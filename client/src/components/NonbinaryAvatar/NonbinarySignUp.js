import React from 'react';
import nonbinary from '../../assets/images/nonbinary.jpg'
import './style.css'


function NonbinarySignUp({ selected, onClick }) {
    return (
        selected ? <img alt="nonbinary avatar" className="nonbinarySignUp selected" src={nonbinary} />
            : <img onClick={() => onClick()} alt="nonbinary avatar" className="nonbinarySignUp" src={nonbinary} />
    )
}

export default NonbinarySignUp;