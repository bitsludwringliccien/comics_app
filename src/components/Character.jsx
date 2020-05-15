import React from 'react';
import './styles/character.scss';

function Character() {
  return (
    <div className="character">
      <img
        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/3dman442.jpg"
        alt="Avatar"
        className="image"
      />
      <div className="middle">
        <div className="text">Ludwring Liccien</div>
      </div>
    </div>
  );
}

export default Character;
