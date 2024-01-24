import React from 'react'
import { useTranslation } from 'react-i18next'

import "./contactView.css"
import ContactHero from '../components/ContactHero'
import ContactForm from '../components/ContactForm'
import PageHeader from '../../../components/pageHeader/PageHeader'

const ContactView = () => {

  const { t } = useTranslation('translation', { keyPrefix: 'pageHeader' });

  return (
    <div>
      <PageHeader title={t('contact')} />
      <ContactForm />
    </div>
  )
}

export default ContactView