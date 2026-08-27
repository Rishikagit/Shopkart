import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallBack from '../Pages/ErrorFallBack'
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
function Layout() {
    const { state } = useContext(ThemeContext);

  return (
   <div style={{
        backgroundColor: state.theme === "light" ? "#fff" : "#121212",
        color: state.theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
      }}
    >

           <ErrorBoundary FallbackComponent={ErrorFallBack}>

      <Navbar />
      <Outlet />

      </ErrorBoundary>
    </div>
  )
}

export default Layout