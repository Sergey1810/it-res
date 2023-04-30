import React from 'react'
import './footer.css'
import youtube from '../../images/Youtube.png'
import facebook from '../../images/Facebook.png'
import Twitter from '../../images/Twitter.png'

export default function Footer() {
  return (
    <div className='footer__container'>
        <div className='footer__content'>
          <div className='footer__contact'>
            <h2 className='footer__title'>IT-Resurs</h2>
            <p className='footer__subtitle'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate deleniti labore quasi dignissimos voluptatum voluptate ut repellat, ipsam ex nam debitis porro quis tempore dolorum enim nisi obcaecati odit molestiae.</p>
            <div className='footer__icons'>
                <img src={youtube} alt="" className='footer__icon'/>
                <img src={Twitter} alt="" className='footer__icon'/>
                <img src={facebook} alt="" className='footer__icon'/>
            </div>
          </div>
          <div className='footer__nav'>
          </div>
        </div>
        <div className='footer__line'></div>
        <div className='footer__copy'>Copyright Lisovcev 2021 All Right Reserved</div>
    </div>
  )
}
