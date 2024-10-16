import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Context, { AppContext } from '../contextApi/Context'
import DetailItems from '../components/DetailItems'


export default function ProductDetail() {

  return (
    <Context>
      <div className='bg-white'>
        <Navbar />
        <DetailItems />
      </div>
    </Context>
  )
}
