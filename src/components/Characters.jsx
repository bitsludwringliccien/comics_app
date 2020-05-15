import React from 'react';
import './styles/characters.scss';
import Character from '../components/Character';
function Characters(props) {
  const { estilo, tittle } = props;
  return (
    <div className="container">
      <h2 className="title">{tittle}</h2>
      <section className={estilo}>
        <Character />
        <Character />
        <Character />
        <Character />
        <Character />
        <Character />
        <Character />
        <Character />
        <Character />
        <Character />
        <Character />
        <Character />
        <Character />
        <Character />
        <Character />
        <Character />
      </section>
    </div>
  );
}

export default Characters;
