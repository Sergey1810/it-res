import React from 'react'
import './gridItem.css'

export default function GridItem({item}) {
 
  return (
    <div className='gridItem'>
        <img src = {item.image} alt="" className='gridItem__img' />
        <div className='gridItem__container'>
            <h2 className='gridItem__title'>{item.title}</h2>
            <p className='gridItem__subtitle'>{item.subtitle}</p>
        </div>
    </div>
  )
}
