import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ConsultingComponent from '../components/consulting/Consulting'; 
import Subscribe from '../components/Subscribe/Subscribe'

function ConsultingPage() {
  return (
    <>
      <Header />
      <ConsultingComponent />
      <Subscribe/>
      <Footer />
    </>
  );
}

export default ConsultingPage;
