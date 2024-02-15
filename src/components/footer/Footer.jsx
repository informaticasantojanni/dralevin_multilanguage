import React from 'react'
import "./footer.css"
import SwitchLanguage from '../navbar/components/SwitchLanguage';
import { useTranslation } from 'react-i18next'


const Footer = () => {

  const { t } = useTranslation('translation', { keyPrefix: 'footer' });


  return (
    <footer>
      <div className='footer-container'>
        <div className="footer-section">
          <div className="container">
            <p className='logo mt-0 mb-1'>Dra. María Elena Levín</p>
            <p className='mb-0 mt-0'>{t('text_1')}</p>
          </div>
        </div>

        <div className="footer-section">
          <div className="container">
            <p className='mb-1'>Cell: +54911-4447-7804</p>
            <p className='mt-0'>E-mail: <a href="mailto:contacto@dralevin.ar">contacto@dralevin.ar</a></p>

          </div>
        </div>

        <div className="footer-section">
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