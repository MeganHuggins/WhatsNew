import React from 'react';
import './Menu.css'
import localImage from '../../icons/location.png';
import healthImage from '../../icons/heart-beat.png';
import entertainmentImage from '../../icons/movie.png';
import scienceImage from '../../icons/rocket.png';
import technologyImage from '../../icons/technology.png';

const Menu = ({updateCategory}) => {
  return (
    <nav className="nav-bar">
      <button onClick={(e) => updateCategory(e, 'local')}>
        <img className="menu-icon" src={localImage} alt="location indicator" />
        <span>Local</span>
      </button>
      <button onClick={(e) => updateCategory(e, 'health')}>
        <img className="menu-icon" src={healthImage} alt="heartbeat" />
        <span>Health</span>
      </button>
      <button onClick={(e) => updateCategory(e, 'entertainment')}>
        <img className="menu-icon" src={entertainmentImage} alt="movieset board" />
        <span>Entertainment</span>
      </button>
      <button onClick={(e) => updateCategory(e, 'science')}>
        <img className="menu-icon" src={scienceImage} alt="rocketship" />
        <span>Science</span>
      </button>
      <button onClick={(e) => updateCategory(e, 'technology')}>
        <img className="menu-icon" src={technologyImage} alt="collection of cellphone computer tablet" />
        <span>Technology</span>
      </button>
      <div className="circle-one"></div>
      <div className="circle-two"></div>
      <div className="circle-three"></div>
    </nav>
  )
}

export default Menu;
