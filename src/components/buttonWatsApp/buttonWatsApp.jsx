import { FaWhatsapp } from 'react-icons/fa';
import './buttonWatsApp.css'

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511946294394?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20consultoria!"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={28} color="#fff" />
    </a>
  );
}