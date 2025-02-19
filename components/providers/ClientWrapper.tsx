'use client'

import React from 'react'
import { SessionProvider } from "next-auth/react"

interface ClientWrapperProps{
    children:React.ReactNode
}

const ClientWrapper = ({children}:ClientWrapperProps) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default ClientWrapper