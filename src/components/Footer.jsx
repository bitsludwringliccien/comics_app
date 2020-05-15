import React from 'react';

import './styles/footer.scss';
function Footer() {
  return (
    <footer className="footer">
      <div className="power_by">
        <p>Eleborado por: Ludwring Liccien</p>
      </div>
      <div className="terms">
        <a href="/">Terminos de uso</a>
        <a href="/">Declaración de privacidad</a>
        <a href="/">Centro de ayuda</a>
      </div>
    </footer>
  );
}

export default Footer;
