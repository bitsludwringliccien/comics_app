import React from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Characters from '../components/Characters';
import Footer from '../components/Footer';
function Dc() {
  return (
    <React.Fragment>
      <Header />
      <Search />
      <Characters estilo="dc" tittle="Dc Comics" />
      <Footer />
    </React.Fragment>
  );
}

export default Dc;
