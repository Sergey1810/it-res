import React from 'react'
import './navigate.css'

export default function Navigate() {
  return (
    <div className='navigate'>

    <ul className='navigate__container'>
        <li className='navigate__container-item'>Home</li>
        <li className='navigate__container-item'>About</li>
        <li className='navigate__container-item'>FQ</li>
        <li className='navigate__container-item'>Info</li>
        <li className='navigate__container-item'>Conntent</li>
    </ul>
     <button className='navigate__button'>Удаленный доступ</button>
    </div>
  )
}
