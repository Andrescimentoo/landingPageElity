import React from 'react'
import img1Elity from '@assets/img1_elityConsultoria.jpg';
import img2Elity from '@assets/img2_elityConsultoria.jpg';
import img3Elity from '@assets/img3_elityConsultoria.jpg';
import img4Elity from '@assets/img4_elityConsultoria.jpg';
import img5Elity from '@assets/img5_elityConsultoria.jpg';
import img6Elity from '@assets/img6_elityConsultoria.jpg';
import "./images.css"

export const Imagem1header = () => {
  return (
    <div className='imagemHeader'>
     <img src={img1Elity} alt="Logo da Elity Consultoria" />
    </div>
  )
}

export const Image2main = () => {
  return (
    <div className='img_2'>
      <img src={img2Elity} alt="imagem 2, descreve funções sobre a empresa Elity Consultoria " />
    </div>
  )
}

export const Image3main = () => {
  return (
    <div className='img_3'>
      <img src={img3Elity} alt="imagem 3, descreve mais funções da empresa" />
    </div>
  )
}
export const Image4main = () => {
  return (
    <div className='img_4'>
      <img src={img4Elity} alt="imagem 4, descreve mais funções da empresa" />
    </div>
  )
}
export const Image5main = () => {
  return (
    <div className='img_5'>
      <img src={img5Elity} alt="imagem 5, descreve mais funções da empresa" />
    </div>
  )
}
export const Image6main = () => {
  return (
    <div className='img-6'>
      <img src={img6Elity} alt="imagem 5, descreve mais funções da empresa" />
    </div>
  )
}




