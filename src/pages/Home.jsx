import React from 'react'
import Header from '../components/header/Header'
import Section from '../components/section/Section'
import Grid from '../components/grid/Grid'
import Footer from '../components/footer/footer'
import Advantage from '../components/advantage/advantage'

export default function Home() {
  return (
    <div>
        <Header/>
        <Section/>
        <Advantage/>
        <Grid/>
        <Footer/>
    </div>
  )
}
