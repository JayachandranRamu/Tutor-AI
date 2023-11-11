import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Courses from '../Pages/Dashboard'
import Dashboard from '../Pages/Courses'
import InterviewPage from '../Pages/InterviewPage'
import HomePage from '../Pages/HomePage'

const MainRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/interview" element={<InterviewPage />} />
        </Routes>
    </>
  )
}

export default MainRoutes