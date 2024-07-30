import React from 'react'
import Header from './components/Header'
import Clients from './components/Clients'
import PartnerCompany from './components/PartnerCompany'
import Services from './components/Services'
import Projects from './components/Projects'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
// import './App.css'

function App() {

  return (
    <>
    <Header/>
    <Clients/>
    <PartnerCompany/>
    <Services/>
    {/* <Page3/> */}
    <Projects/>
    <FAQ/>
    <Footer/>
    </>
  )
}

export default App
