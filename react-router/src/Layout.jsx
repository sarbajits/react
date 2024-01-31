import React,{useState} from "react"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div className="bg-slate-300 dark:bg-slate-950">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout