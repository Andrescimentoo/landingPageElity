import React from 'react'
import { Image2main, Image3main, Image4main, Image5main } from '../images/images.jsx'
import './aside.css'

export const Aside = () => {
  return (
    <aside>
      <section className="ilustracoes_sobre_nos">
          <ul className="container_1">
            <li><Image2main /></li>
            <li><h3>Primeiro Texto</h3></li>
          </ul>
          
          <ul className='container_2'>
            <li><Image3main /></li>
            <li>
              <h3>Primeiro Texto</h3>
            </li>
          </ul>
         
          <ul className='container_3'>
            <li><Image4main /></li>
            <li><h3>Primeiro Texto</h3></li>
          </ul>
         
          <ul className='container_4'>
            <li><Image5main /></li>
            <li><h3>Primeiro Texto</h3></li>
          </ul>
       </section>
    </aside>

  )
}

