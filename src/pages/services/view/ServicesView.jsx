import PageHeader from "../../../components/pageHeader/PageHeader"
import ServicesList from "../components/ServicesList"
import { useTranslation } from "react-i18next"


const ServicesView = () => {

  const { t } = useTranslation('translation', { keyPrefix: 'pageHeader' });

  return (

    <div>
      <PageHeader
      title={t('services')}
      />
      <ServicesList />
    </div>


  )
}

export default ServicesView