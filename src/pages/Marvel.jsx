import React from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Characters from '../components/Characters';
import Footer from '../components/Footer';
function Marvel() {
  return (
    <React.Fragment>
      <Header />
      <Search />
      <Characters estilo="marvel" tittle="Marvel" />
      <Footer />
    </React.Fragment>
  );
}

export default Marvel;
