import React from 'react';
import './styles/header.scss';

function Header(props) {
  const { title } = props;
  return (
    <header className="header">
      <h1 className="header__tittle">{title}</h1>
    </header>
  );
}

export default Header;
