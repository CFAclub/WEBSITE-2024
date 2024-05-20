import React ,  { useEffect, useState } from 'react'
import Page from './page/page'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const[isloading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(false)
  }, [])

  if(isloading) return null;
  else
  return (
    <>
      <Page/>
    </>
  )
}

export default App
