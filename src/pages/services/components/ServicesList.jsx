import Service from '../components/Service'
import ServicePhoto from '../components/ServicePhoto'
import serviceMobile1 from '../../../assets/services/service_1_mobile.png'
import serviceDesktop1 from '../../../assets/services/service_1_desktop.png'
import serviceMobile2 from '../../../assets/services/service_2_mobile.png'
import serviceDesktop2 from '../../../assets/services/service_2_desktop.png'
import serviceMobile3 from '../../../assets/services/service_3_mobile.png'
import serviceDesktop3 from '../../../assets/services/service_3_desktop.png'
import { useTranslation } from 'react-i18next'
import './servicesList.css'

const ServicesList = () => {

  const { t } = useTranslation('translation', { keyPrefix: 'services' });

  return (

    <div className="main-container">
      <div className="servicesList mt-5 mb-5">
        <div className="serviceList--item1">
          <Service
            title={t('title_1')}
            description={t('text_1')}
          />
        </div>
        <div className="serviceList--item2">
          <ServicePhoto
            imgMobile={serviceMobile1}
            imgDesktop={serviceDesktop1}
          />
        </div>
        <div className="serviceList--item3">
          <Service
            title={t('title_2')}
            description={t('text_1')}
          />
        </div>
        <div className="serviceList--item4">
          <ServicePhoto
          imgMobile={serviceMobile2}
          imgDesktop={serviceDesktop2}
          />
        </div>
        <div className="serviceList--item5">
          <Service
            title={t('title_3')}
            description={t('text_1')}
          />
        </div>
        <div className="serviceList--item6">
          <ServicePhoto
          imgMobile={serviceMobile3}
          imgDesktop={serviceDesktop3}
          />
        </div>
      </div>
    </div>

  )
}

export default ServicesList

























{/* <div className="services mb-5">
<div className="services__description1 element">
  <Service
    title='Servicio__1'
    description='Esta es la descripción del servicio 1'
  />
</div>
<div className="services__photo1 element">
  <ServicePhoto
    imgMobile={serviceImg1}
    imgDesktop={serviceImg1Desktop}
  />
</div>
</div> */}

{/* <div className="services__description2 element">
<Service
  title='Servicio_2'
  description='Esta es la descripción del servicio 2'
/>
</div>
<div className="services__photo2 element">
<ServicePhoto
  imgMobile={serviceImg2}
  imgDesktop={serviceImg2Desktop}
/>
</div>
<div className="services__description3 element">
<Service
  title='Servicio_3'
  description='Esta es la descripción del servicio 3'
/>
</div>
<div className="services__photo3 element">
<ServicePhoto
  imgMobile={serviceImg3}
  imgDesktop={serviceImg3Desktop}
/>
</div> */}