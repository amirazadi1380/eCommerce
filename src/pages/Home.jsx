import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import Stats from '../components/Stats'
import Brands from '../components/Brands'
import Header from '../components/Header'
import Content2 from '../components/Content2'
import Category from '../components/Catgeory'
import Footer from '../components/Footer'
import Trend from '../components/Trend'
import Features from '../components/Features'
import Context from '../contextApi/Context'
export default function Home() {

  return (
    <Context>
      <Navbar />
      <Header />
      <Category />
      <Stats />
      <Trend />
      <Content />
      <Features />
      <Brands />
      <Content2 />
      <Footer />
    </Context>
  )
}
