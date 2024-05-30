import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Divisions from '../../components/divisions/divisions'
import Team from '../../components/team/team'
import Hero from '../../components/hero/hero'

function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <Divisions />
      <Team />
      <Footer />
    </>

  )
}

export default Home
