import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'
import HomeNavbar from '@/components/shared/home-navbar/HomeNavbar'
import Navbar from '@/components/shared/navbar/Navbar'
import { Toaster } from '@/components/ui/toaster'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import React from 'react'
import HomePage from './(home)/page'

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      {children}
    </>
  )


}

export default Layout