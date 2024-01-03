import React from 'react'
import "./footer.css"
import SwitchLanguage from '../navbar/components/SwitchLanguage';
import { useTranslation } from 'react-i18next'


const Footer = () => {

  const { t } = useTranslation('translation', { keyPrefix: 'footer' });


  return (
    <footer>
      <div className='footer-container'>
        <div class="footer-section">
          <div className="container">
            <p className='logo mt-0 mb-1'>Dra. María Elena Levín</p>
            <p className='mb-0 mt-0'>{t('text_1')}</p>
          </div>
        </div>

        <div class="footer-section">
          <div className="container">
            <p className='mb-1'>Cell: 11-1234-5678</p>
            <p className='mt-0'>E-mail: dralevin@gmail.com</p>
          </div>
        </div>

        <div class="footer-section">
          <div className="container">
            <p>{t('home')}</p>
            <p>{t('services')}</p>
            <p>{t('about')}</p>
            <p>{t('contact')}</p>
          </div>
          {/* <SwitchLanguage /> */}
        </div>

      </div>
    </footer>
  )
}

export default Footer