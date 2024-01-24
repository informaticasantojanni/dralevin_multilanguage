import React from 'react'
import { useTranslation } from 'react-i18next'

import "./aboutView.css"
import AboutCV from '../components/AboutCV'
import AboutHero from '../components/AboutHero'
import PageHeader from '../../../components/pageHeader/PageHeader'

const AboutView = () => {

  const { t } = useTranslation('translation', { keyPrefix: 'pageHeader' });

  return (
    <div>
      <PageHeader title={t('about')}/>
      <AboutCV/>
    </div>
  )
}

export default AboutView