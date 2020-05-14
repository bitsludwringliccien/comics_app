import React from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Characters from '../components/Characters';
function Dc() {
  const show = true;
  return (
    <React.Fragment>
      <Header title="Personajes" />
      {show ? <Search /> : null}

      <Characters estilo="dc" />
    </React.Fragment>
  );
}

export default Dc;
