import React, { useEffect, useState } from 'react'
import "./AboutCV.css"
import "../../../styles.css"
// import { text } from "./aboutText"
import { useTranslation } from 'react-i18next';

const AboutCV = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'about' });

  const sliceText = (text, pNumber) => {
    const words = text.split(' ');
    const totalWords = words.length;
    const targetWords1 = Math.ceil(totalWords / 2);
    const part1 = words.slice(0, targetWords1).join(' ');
    const part2 = words.slice(targetWords1).join(' ');
    return (pNumber == 1) ? part1 : part2
  }

  return (
    <div className="about main-container">
      <div className='about__text--1 text3 mb-3'>{sliceText(t('text_1'), 1)}</div>
      <div className='about__text--2 text3'>{sliceText(t('text_1'),2)}</div>
    </div>

  )
}

export default AboutCV