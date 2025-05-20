import React from 'react'
import './main.css'
import { WhatsAppButton } from '../buttonWatsApp/buttonWatsApp.jsx'

export const Main = () => {
  return (
    <main className="conteudo-main">
           <section className='boas-vindas'>
              <h1 className='titulo-boas-vindas'>Bem-vindos a Elity consultoria!</h1>
              <p><strong>Independentemente do momento em que sua empresa se encontra,temos a experiência e as soluções certas para impulsionar seu crescimento</strong></p>
              <p><strong>Descubra como a Elity Consultoria pode transformar sua trajetória!</strong></p>  
           </section>
           
           <section className='textos-iniciais'>
                <h1 className="title-main">
                  <strong>O que fazemos por você?</strong> 
                </h1>
                <p>Ter uma agência de marketing para sua empresa
                   pode ser um diferencial significativo em um mercado
                   tão competitivo. Uma agência traz expertise e
                   conhecimento atualizado sobre as tendências do
                   mercado, permitindo que sua marca se destaque.
                   Além disso, contar com profissionais especializados
                   libera você e sua equipe para focar no
                   Core business da empresa, enquanto estratégias
                   eficazes de marketing são implementadas.
                   Uma boa agência pode ajudar a construir uma
                   identidade forte, criar campanhas impactantes e
                   engajar seu público-alvo de maneira mais eficiente.
                   Investir em uma agência de marketing não é apenas
                   uma despesa, mas uma oportunidade de crescimento
                   e inovação, contribuindo para que sua empresa
                   alcance novos patamares
                </p>
    
                <ul className="texto-beneficios">
                  <li>📊 Especialistas em impulsionar as vendas de negócios no ramo de alimentação!</li>
                  <li>✅ Gestão de iFood</li>
                  <li>✅ Gestão de Tráfego Pago</li>
                  <li>✅ Gestão de Redes Sociais</li>
                  <li>✅ Google Meu Negócio</li>
                  <li>✅ Gestão Financeira</li>
                </ul>
           </section>
          
           <section className="whatsapp-button">
             <WhatsAppButton/>
           </section>
        </main>
    
  )
}


