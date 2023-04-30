import React from 'react'
import './advantage.css'
import operativnost from '../../images/oper.png'
import kach from '../../images/kach.png'
import vig from '../../images/vig.png'

export default function Advantage() {
  return (
    <div className='advantage'>
        <div className='advantage__container'>
            <h2 className='advantage__title'>Наши преимущества</h2>
            <p className='advantage__subtitle'>best services</p>
            <div className='advantage__row'>
                <div className='advantage__column'>
                    <div>
                        <img src={operativnost} alt="" className='advantage__column-img'/> 
                    </div> 
                    <div>
                        <p className='advantage__column-title'>Оперативность</p>
                        <p className='advantage__column-subtitle'>Большинство ремонтных работ производится в день обращения</p>
                    </div>
                </div>
                <div className='advantage__line'></div>
                <div className='advantage__column'>
                    <div>
                        <img src={vig} alt="" className='advantage__column-img'/>
                    </div>
                    <div>
                        <p className='advantage__column-title'>Выгода</p>
                        <p className='advantage__column-subtitle'>Цены ниже чем у конкурентов</p>
                    </div>
                </div>
                <div className='advantage__line'></div>
                <div className='advantage__column'>
                    <div>
                        <img src={kach} alt="" className='advantage__column-img'/>
                    </div>
                    <div>
                        <p className='advantage__column-title'>Качество</p>
                        <p className='advantage__column-subtitle'>Только качественный ремонт</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
