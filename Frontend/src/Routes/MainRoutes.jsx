import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Courses from '../Pages/Course'
import Dashboard from '../Pages/Dashboard'

const MainRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/course" element={<Courses />} />
        </Routes>
    </>
  )
}

export default MainRoutes