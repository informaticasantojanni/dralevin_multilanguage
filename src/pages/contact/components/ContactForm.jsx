import React, { useState } from 'react'
import "./ContactForm.css";
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'contact' });
  const urlFetchDailu = "https://script.google.com/macros/s/AKfycbyKxrp0TOhXXRHhdt0_YRFeJKdMA2ei3242YwtFT5Kzlcdy4QIGbS39AzY15e9RQGut/exec";

  // Define state variables for form fields
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [btnSubmitText, setBtnSubmitText] = useState(t('btn_send'));

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnSubmitText(t('btn_sending'));

    // Prepara data object with form input data
    const formData = {
      recipient: email,
      name: name,
      lastname: lastname,
      company: company,
      phone: phone,
      message: message
    }

    // Fetch Gmail to send email
    fetch(urlFetchDailu, {
      method: 'POST',
      redirect: "follow",
      dataType: 'json',
      accepts: 'application/json',
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the Google Apps Script endpoint
        console.log("Response status: ", data.status);
        setBtnSubmitText(t('btn_sent'));
        setTimeout(() => { setBtnSubmitText(t('btn_send')) }, 2000);
        // Reset form fields after submission
        setName('');
        setLastname('');
        setCompany('');
        setEmail('');
        setPhone('');
        setMessage('');

      })
      .catch((error) => {
        console.error('Error:', error);
      });


  };

  return (
    <div className='contactForm mt-5 mb-5'>

      <div className="contactForm--container">

        <div className="contactForm__header">
          <p className='text2 mb-2'>{t('title_1')}</p>
        </div>

        <div className="contactForm__body">
          <form onSubmit={handleSubmit}>
            <div className="contactForm__form text3">

              <div className="contactForm__form__input">
                <label>{t('input_name')}</label>
                <input
                  className='text2'
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="contactForm__form__input">
                <label>{t('input_lastname')}</label>
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>

              <div className="contactForm__form__input">
                <label>{t('input_institution')}</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />
              </div>


              <div className="contactForm__form__input">
                <label>{t('input_email')}</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>


              <div className="contactForm__form__input">
                <label>{t('input_phone')}</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>


              <div className="contactForm__form__input">
                <label>{t('input_message')}</label>
                <textarea
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <input className="btn1 contactForm__form__btn--style mt-3" type="submit" value={btnSubmitText} />

            </div>

          </form>
        </div>


      </div>
    </div>
  )
}

export default ContactForm