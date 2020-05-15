import React from 'react';
import { Link } from 'react-router-dom';
import './styles/home.scss';

function Home() {
  return (
    <React.Fragment>
      <div className="home__title">
        <h1>Haz click una Case de Comics</h1>
      </div>
      <div className="home__container">
        <Link to="/marvel">
          <img
            className="home_images"
            src="../../public/marvel.png"
            alt="Marvel"
          />
        </Link>
        <Link to="/dc">
          <img
            className="home_images"
            src="../../public/dc.png"
            alt="Dc Comics"
          />
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Home;
