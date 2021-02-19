import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  
  return (
    <div>
      <Link className="nav-tab" to={`/projects`}>Projects</Link>
      <Link className="nav-tab" to={`contact`}>Contact</Link>
    </div>
  )};

export default Nav;