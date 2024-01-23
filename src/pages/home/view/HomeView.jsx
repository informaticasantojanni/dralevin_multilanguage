import React from 'react'
import "./homeView.css"
import HomeAbout from '../components/HomeAbout'
import HomeServices from '../components/HomeServices'
import HomeContact from '../components/HomeContact'
import HomeHero from '../components/HomeHero'

const HomeView = () => {
  return (
    <div>
      <HomeHero
        heroTitle='¿Tenes dudas sobre tu diagnóstico?'
        heroParagraph='Consulta por una segunda opinión especializada en imágenes'
      />
      <HomeAbout />
      <HomeServices />
      {/* <HomeContact/> */}
    </div>
  )
}

export default HomeView