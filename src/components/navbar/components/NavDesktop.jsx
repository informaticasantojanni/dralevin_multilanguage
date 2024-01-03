import React from 'react'
import { Link } from 'react-router-dom';
import '../../navbar/navbar.css';
import { navItems } from "./navItems"
import SwitchLanguage from './SwitchLanguage';
import { useTranslation } from 'react-i18next';
import "../../../../src/styles.css"

const NavDesktop = () => {

  const { t } = useTranslation('translation', { keyPrefix: 'navbar' });

  return (
    <nav>
      <div className="navDesktop--container">
        <div className="navDesktop__logo">
          <p className='titlePri3'><strong>Dra.</strong> María Elena<strong> Levín</strong></p>
        </div>
        <div className="navDesktop__links">
          <ul>
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className="linkTo textLinks" to={item.link}>{t(item.label)}</Link></li>
              )
            })}
          </ul>
          <SwitchLanguage/>
        </div>

      </div>
    </nav>
  )
}

export default NavDesktop