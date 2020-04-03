import React from 'react';
import male from '../../assets/images/male.png'
import './style.css'

function MaleSignUp({ selected, onClick }) {
    return (
        selected ? <img alt="male avatar" className="maleSignUp selected" src={male} />
            : <img onClick={() => onClick()} alt="male avatar" className="maleSignUp" src={male} />
    )
}

export default MaleSignUp;