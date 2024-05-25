import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Divisions from '../../components/divisions/divisions'
import Team from '../../components/team/team'

function Home() {
  return (
    <>
      <Header />
      <Divisions />
      <Team />
      <div>
        <h1>hey this is home</h1>
      </div>
      <Footer />
    </>

  )
}

export default Home
