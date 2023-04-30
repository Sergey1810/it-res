import React from 'react'
import './header.css'
import Navigate from '../navigate/Navigate'

export default function Header() {
  return (
    <div className='header'>
        <div className='header__container'>
        <div className="header__logo">IT - Resurs</div>
        <Navigate/>
        </div>
        <div className='header__container'>
            <div className='header__content'>
            <h1 className='header__title'>Компьютерная мастерская, ремонт и обслуживание офисной техники</h1>
            <p className='header__subtitle'>Сервисный центр "IT-Resurs" оказывает услуги по ремонту компьютерной и офисной техники, ремонту смартфонов, подключению и сопровождению 1С и подключению к обязательной маркировки товаров, монтаж видеонаблюдения и создание сайтов.
</p>
            <button className='button'>Заказать звонок</button>
            </div>
         
        </div>
    </div>
  )
}
