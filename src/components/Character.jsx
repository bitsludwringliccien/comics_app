import React from 'react';
import PropTypes from 'prop-types';
import './styles/character.scss';

function Character(props) {
  const { name, image } = props;
  return (
    <div className="character">
      <img src={image} alt="Avatar" className="image" />
      <div className="middle">
        <div className="text">{name}</div>
      </div>
    </div>
  );
}
Character.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
  image: PropTypes.string.isRequired,
  biography: PropTypes.string,
  powers: PropTypes.array,
};
export default Character;
