import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import FinanceComponent from '../components/Finance/Finance'; 
import Subscribe from '../components/Subscribe/Subscribe'
function Finance() {
  return (
    <> 
    <Header />
    <FinanceComponent/>
    <Subscribe/>
    <Footer />

    </>
  )
}

export default Finance
