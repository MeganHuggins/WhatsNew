import React from 'react';
import './Menu.css'
import localImage from '../../icons/location.png';
import healthImage from '../../icons/heart-beat.png';
import entertainmentImage from '../../icons/movie.png';
import scienceImage from '../../icons/rocket.png';
import technologyImage from '../../icons/technology.png';

const Menu = ({updateCategory}) => {
  return (
    <nav className='nav-bar' data-testid='nav-bar'>
      <button id='local' onClick={(e) => updateCategory(e.target.closest('button').id)}>
        <img className='menu-icon' src={localImage} alt='location indicator' />
        Local
      </button>
      <button id='health' onClick={(e) => updateCategory(e.target.closest('button').id)}>
        <img className='menu-icon' src={healthImage} alt='heartbeat' />
        Health
      </button>
      <button id='entertainment' onClick={(e) => updateCategory(e.target.closest('button').id)}>
        <img className='menu-icon' src={entertainmentImage} alt='movieset board' />
        Entertainment
      </button>
      <button id='science' onClick={(e) => updateCategory(e.target.closest('button').id)}>
        <img className='menu-icon' src={scienceImage} alt='rocketship' />
        Science
      </button>
      <button id='technology' onClick={(e) => updateCategory(e.target.closest('button').id)}>
        <img className='menu-icon' src={technologyImage} alt='collection of cellphone computer tablet' />
        Technology
      </button>
      <div className='circle-one'></div>
      <div className='circle-two'></div>
      <div className='circle-three'></div>
    </nav>
  )
}

export default Menu;
