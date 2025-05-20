import React from 'react'
import './footer.css'
import { FaWhatsapp, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const Footter = () => {
  return (
    
    
    <footer className="footer">
      <p>© 2025 Elity Consultoria. Todos os direitos reservados.</p>
      <ul className="footer-contacts">
        <li className="contact-item">
          <FaWhatsapp /> <span>WatsApp: +55 11 94629-4394</span>
        </li>
    
        <li className="contact-item">
          <FaEnvelope /> <span>E-mail: pedro.barreto@consultoriaelity.com.br</span>
        </li>
    
        <li className="contact-item">
          <FaMapMarkerAlt /> <span>Localização: São Paulo, Brasil</span>
        </li>
    
        <li className="contact-item">
          <FaLinkedin /> <span>LinkedIn</span>
        </li>
    
        <li className="contact-item">
          <FaInstagram /> <span>Instagram</span>
        </li>
      </ul>
    </footer>
  );
}
  

