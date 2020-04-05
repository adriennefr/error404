import React from 'react';
import './style.css'

function MaleSignUp({ selected, onClick }) {
    return (
        selected ? <img alt="male avatar" className="maleSignUp selected" src={'/images/male.png'} />
            : <img onClick={() => onClick()} alt="male avatar" className="maleSignUp" src={'/images/male.png'} />
    )
}

export default MaleSignUp;
