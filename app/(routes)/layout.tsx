import Footer from '@/components/sections/footer/Footer'
import Header from '@/components/sections/header/Header'
import React from 'react'

interface RouteLayoutProps{
    children:React.ReactNode;
}
const RouteLayout = ({children}:RouteLayoutProps) => {
  return (
    <div>
        <Header/>
            {children}
        <Footer/>
    </div>
  )
}

export default RouteLayout