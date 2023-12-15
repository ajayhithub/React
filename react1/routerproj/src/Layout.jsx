import Header from "./componenet/header/Header"
import Footer from "./componenet/footer/Footer"
import { Outlet } from "react-router-dom"


export default function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}
