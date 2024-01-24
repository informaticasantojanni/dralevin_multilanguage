import React, { useRef, useState } from 'react'
import "./HomeServices.css"
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import doctor from '../../../assets/icons/doctor-female.svg'
import hospital from '../../../assets/icons/hospital.svg'
import useAnimation from '../../../hooks/useAnimation';

const HomeServices = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'home' });
  const serviceRef1 = useRef(null); //Inicialization
  const [animation1, setAnimation1] = useState(false);
  useAnimation(setAnimation1, serviceRef1);

  return (
    <div ref={serviceRef1} className='main-container'>
      <div className="homeServices mb-5">
        <h2 className='homeServices--text-title titlePri2'>{t('home_services_title_1')}</h2>
        <div className="homeServices--container">
          <div className={(animation1) ? 'homeServices--service animation mt-2 mb-2 ' : 'homeServices--service mt-2 mb-2 '}>
            <div className="homeServices--service-header">
              <img src={doctor} alt="Doctor" />
              <h3 className='text1'>{t('home_services_text_1')}</h3>
            </div>
            <div className="homeServices--service-body">
              <p className='text3'>{t('home_services_description_1')}</p>
            </div>
            <div className="homeServices--service-formText mt-2">
              < Link className="link-to textLinks" to="/contact" >{t('home_servicesContact_text_1')}</Link>
            </div>
          </div>
          <div className={(animation1) ? 'homeServices--service animation mt-2 mb-2 ' : 'homeServices--service mt-2 mb-2 '}>
            <div className="homeServices--service-header">
              <img src={hospital} alt="Hospital" />
              <h3 className='text1'>{t('home_services_text_2')}</h3>
            </div>
            <div className='homeServices--service-body'>
              <p className='text3'>{t('home_services_description_2')}</p>
            </div>
            <div className="homeServices--service-formText mt-2">
              < Link className="link-to textLinks" to="/services" >{t('home_servicesContact_text_2')}</Link>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default HomeServices