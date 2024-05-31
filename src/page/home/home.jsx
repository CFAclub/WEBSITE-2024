import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Divisions from '../../components/divisions/divisions'
import Team from '../../components/team/team'
import Hero from '../../components/hero/hero'
import Subscribe from '../../components/Subscribe/Subscribe'

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Divisions />
      <Team />
      <Subscribe />
      <Footer />
    </>

  )
}

export default Home
