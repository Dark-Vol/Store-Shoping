import GetLayoutChat from '@components/Chat/GetLayoutChat'
import Footer from '@components/Footer'
import Header from '@components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const LayOut: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
      <GetLayoutChat/>
    </>
  )
}

export default LayOut
