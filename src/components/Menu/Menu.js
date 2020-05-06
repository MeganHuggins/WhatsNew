import React from 'react';
import './Menu.css'

const Menu = ({updateCategory}) => {
  return (
    <nav className="nav-bar">
      <button onClick={(e) => updateCategory(e, 'local')}>Local</button>
      <button onClick={(e) => updateCategory(e, 'health')}>Health</button>
      <button onClick={(e) => updateCategory(e, 'entertainment')}>Entertainment</button>
      <button onClick={(e) => updateCategory(e, 'science')}>Science</button>
      <button onClick={(e) => updateCategory(e, 'technology')}>Technology</button>
      <div className="circle-one"></div>
      <div className="circle-two"></div>
      <div className="circle-three"></div>
    </nav>
  )
}

export default Menu;
