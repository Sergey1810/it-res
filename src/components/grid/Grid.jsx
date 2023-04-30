import React from 'react'
import GridItem from '../gridItem/GridItem'
import './grid.css'

export default function Grid() {

    const gridArr = [
        {
            image:'https://avatars.mds.yandex.net/i?id=b8a12dbbbec7078032059f4d8184ed1f74ad4861-9220607-images-thumbs&n=13',
            title: 'hello',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est possimus, in dolor ducimus veritatis modi nesciunt rerum porro dicta eum magni doloribus vel blanditiis error iste sequi animi hic tenetur',
        },
        {
          image:'https://avatars.mds.yandex.net/i?id=b8a12dbbbec7078032059f4d8184ed1f74ad4861-9220607-images-thumbs&n=13',
          title: 'hello',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est possimus, in dolor ducimus veritatis modi nesciunt rerum porro dicta eum magni doloribus vel blanditiis error iste sequi animi hic tenetur',
      }, {
        image:'https://avatars.mds.yandex.net/i?id=b8a12dbbbec7078032059f4d8184ed1f74ad4861-9220607-images-thumbs&n=13',
        title: 'hello',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est possimus, in dolor ducimus veritatis modi nesciunt rerum porro dicta eum magni doloribus vel blanditiis error iste sequi animi hic tenetur',
    },{
      image:'https://avatars.mds.yandex.net/i?id=b8a12dbbbec7078032059f4d8184ed1f74ad4861-9220607-images-thumbs&n=13',
      title: 'hello',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est possimus, in dolor ducimus veritatis modi nesciunt rerum porro dicta eum magni doloribus vel blanditiis error iste sequi animi hic tenetur',
  }
    ]
   
  return (
    <div className='grid'>
      <h2 className='grid__title'>Наши Услуги</h2>
      <p className='grid__subtitle'>Наша компания предоставляет следующие услуги</p>
    <div className='grid__container'>
       {gridArr.map( item => <GridItem item = {item}/> )}  
    </div>
    </div>
  )
}
