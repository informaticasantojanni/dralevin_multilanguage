import React from 'react'
import "./HomeServices.css"
import { useTranslation } from 'react-i18next';

const HomeServices = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'home' });

  return (
    <div className='main-container'>
      <div className="homeServices">
        <p className='titlePri3'>{t('home_services_title_1')}</p>
        <p className='text1'>{t('home_services_text_1')}</p>
      </div>
    </div>
  )
}

export default HomeServices