import React from 'react'
import './section.css'

export default function Section() {
  return (
    <div className='section'>
      <div className='section__column'>
        <h2 className='section__title'>+22</h2>
        <p className='section__subtitle'>Года работы</p>
      </div>
<div className='section__line'></div>
      <div className='section__column'>
        <h2 className='section__title'>+10000</h2>
        <p className='section__subtitle'>Отремонтированных устроиств</p>
      </div>
      <div className='section__line'></div>
      <div className='section__column'>
        <h2 className='section__title'>+20</h2>
        <p className='section__subtitle'>Обслуживаемых организаций</p>
      </div>
    </div>
  )
}
