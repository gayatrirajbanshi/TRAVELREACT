import React from 'react'
import AppNavbar from '../shared/AppNavbar'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
    
        
    <AppNavbar/>
    <Outlet/>
    
    
    </>
  )
}

export default AppLayout