import React, { useState, useEffect } from 'react';
import useInitialState from '../hooks/useInitialState';

import Search from '../components/Search';
import Characters from '../components/Characters';
import Character from '../components/Character';

const API = 'http://localhost:3000/marvel';
function Marvel() {
  const characters = useInitialState(API);

  const [result, setResult] = useState([]);

  useEffect(() => {
    setResult(characters);
  }, [characters]);
  function outputEvent(event) {
    let query = event.target.value;
    let filtered = characters;
    if (query.length >= 3) {
      filtered = characters.filter((item) => {
        return item.name.toLowerCase().includes(query.toLowerCase());
      });
      setResult(filtered);
    }
    setResult(filtered);
  }

  if (result.length === 0) {
    return (
      <React.Fragment>
        <Search onChangeHandle={outputEvent} />
        <Characters estilo="marvel" tittle="Marvel">
          <h2>No existe coincidencia</h2>
        </Characters>
      </React.Fragment>
    );
  }
  // if (result.length !== 0) {
  return (
    <React.Fragment>
      <Search onChangeHandle={outputEvent} />
      <Characters estilo="marvel" tittle="Marvel">
        {result.map((item, i) => (
          <Character key={i} {...item} />
        ))}
      </Characters>
    </React.Fragment>
  );
  // }
}

export default Marvel;
