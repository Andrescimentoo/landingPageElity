import React from 'react'
import { Imagem1header } from '../images/images'
import './header.css'

export const Header = () => {
  return (
    <header className="custom-header">
      <nav className="nav-container">
        <Imagem1header />
        <div className="textos-header">
          <h1 className="titulo-header">Elity Consultoria</h1>
          <h2 className="subtitulo-header">Consultoria de Elite para o seu negócio!</h2>
        </div>
      </nav>
    </header>
  )
}


