import React from 'react';
import './styles/home.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
function Home() {
  return (
    <React.Fragment>
      <Header />
      <div className="home__title">
        <h1>Haz click una Case de Comics</h1>
      </div>
      <div className="home__container">
        <a href="http://">
          <img src="../../public/marvel.png" alt="Marvel" />
        </a>
        <a href="http://">
          <img src="../../public/dc.png" alt="Dc Comics" />
        </a>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
