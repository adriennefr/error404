import React from 'react';
import './style.css'

function MaleSignUp({ selected, onClick }) {
    return (
        selected ? <img alt="male avatar" className="maleSignUp selected avatar" src={'/images/clicked-male.png'} />
            : <img onClick={() => onClick()} alt="male avatar" className="maleSignUp avatar" src={'/images/male.JPG'} />
    )
}

export default MaleSignUp;
