import React from 'react'

const Footer = () => {
  return (

        <footer className="footer">
        <p className="footer__title">Juan Estay R.</p>
        <div className="footer__social">
            <a href="https://www.linkedin.com/in/juan-ignacio-estay-rodr%C3%ADguez-736b7667/" className="home__social-icon">
                <i className='bx bxl-linkedin'></i>
            </a>
            <a href="https://github.com/Juanith0xx" className="home__social-icon">
                <i className='bx bxl-github'></i>
            </a>
            <a href="mailto:juan.estay.rodriguez@icloud.com" className="home__social-icon">
                <i className='bx bx-mail-send'></i>
            </a>           
        </div>
        <p className="footer__copy">&#169; Juan Estay Rodriguez. All rights reserved</p>
            </footer>

  )
}

export default Footer
