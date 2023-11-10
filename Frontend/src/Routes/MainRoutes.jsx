import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Courses from '../Pages/Course'
import Dashboard from '../Pages/Dashboard'
import InterviewPage from '../Pages/InterviewPage'

const MainRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/interview" element={<InterviewPage />} />
        </Routes>
    </>
  )
}

export default MainRoutes