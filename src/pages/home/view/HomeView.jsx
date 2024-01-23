import React from 'react'
import "./homeView.css"
import HomeAbout from '../components/HomeAbout'
import HomeServices from '../components/HomeServices'
import HomeContact from '../components/HomeContact'
import HomeHero from '../components/HomeHero'

import { useTranslation } from 'react-i18next'

const HomeView = () => {

  const { t } = useTranslation('translation', { keyPrefix: 'home' });

  return (
    <div>
      <HomeHero
        heroTitle={t(`home_hero_title`)}
        heroParagraph={t(`home_hero_paragraph`)}
      />
      <HomeAbout />
      <HomeServices />
      {/* <HomeContact/> */}
    </div>
  )
}

export default HomeView