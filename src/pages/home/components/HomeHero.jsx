import React from 'react'
import "./HomeHero.css"

const HomeHero = ({ heroTitle, heroParagraph }) => {
  return (
    <div className="hero">
      <div className='hero--container'>
        <div className="hero--container-body">
          <h2 className='titleSize2 titleStyle1 '>{heroTitle}</h2>
          <p className='textSize3 textStyle1'>{heroParagraph}</p>
        </div>
      </div>
    </div>

  )
}

export default HomeHero