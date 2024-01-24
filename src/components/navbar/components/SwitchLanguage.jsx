import React, { useEffect, useContext } from 'react'
import Select from 'react-select';
import { LanguageContext } from "../../../../src/context/LanguageContext";
import i18n from "../../../core/config/i18n";
import "./switchLanguage.css"
import sp_flag from "../../../assets/sp_flag.jpg"
import en_flag from "../../../assets/uk_flag.jpg"
import pt_flag from "../../../assets/pt_flag.jpg"


const SwitchLanguage = () => {

    const { locale, setLocale } = useContext(LanguageContext);
    // const handleChange = (event) => setLocale(event.target.value);
    const handleChange = (value) => setLocale(value);

    const languageOptions = [
        { value: 'es', label: <span><img className="imgFlag" src={sp_flag} alt="Spain flag" /></span> },
        { value: 'en', label: <span><img className="imgFlag" src={en_flag} alt="UK flag" /></span> },
        { value: 'pt', label: <span><img className="imgFlag" src={pt_flag} alt="Portughese flag" /></span> },
    ];


    useEffect(() => {
        setLocale(i18n.resolvedLanguage);
        console.log("Language detected is: ", i18n.resolvedLanguage)
    }, [])

    useEffect(() => {
        i18n.changeLanguage(locale)
    }, [locale])

    return (
        <div >
            {/* <select className='switchLanguage' value={locale} onChange={handleChange}>
                <option value="es"><img src={sp_flag} alt="spain flag" /></option>
                <option value="en"><img src={sp_flag} alt="spain flag" />EN</option>
            </select> */}
            <Select
                className='switchLanguage'
                value={languageOptions.find((option) => option.value === locale)}
                onChange={(selectedOption) => handleChange(selectedOption.value)}
                options={languageOptions}
                isSearchable={false} // Disable search box
            />
        </div>
    )
}

export default SwitchLanguage
