import './index.scss';
import React from 'react'
import MainImg from '../../../assets/images/mainimg.png';

const Logo = () => {
  return (
    <div className="logo-container">
        <img className="solid-logo" src={MainImg} alt="logo" />
    </div>
  )
}

export default Logo