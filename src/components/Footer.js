import React from 'react'

const Footer = () => {
  return (

    <footer className="site-footer">
    <div className="footer-info">
      <h5>Nombre de la empresa</h5>
      <p>Dirección: Calle Falsa 123, Santiago, Chile</p>
      <p>Teléfono: +123 456 7890 |  Email: xxxxx@xxxxx.com</p>
    </div>
    <div className="footer-social">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook"></i>
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-whatsapp"></i>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram"></i>
      </a>
    </div>
    <div className="footer-copyright">
      <p>© 2024 nombre de la empresa. Todos los derechos reservados.</p>
    </div>
  </footer>
);
}

export default Footer;
