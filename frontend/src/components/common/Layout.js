import React from 'react'
import { Outlet } from 'react-router-dom'
import { CustomNavbar } from './CustomNavbar'
import { Container } from 'react-bootstrap'

export const Layout = () => {
  return (
    <div>
        <CustomNavbar />
        <Outlet />
    </div>
  )
}
