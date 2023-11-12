import React from 'react'
import { Routes,Route } from 'react-router-dom'


import InterviewPage from '../Pages/InterviewPage'
import HomePage from '../Pages/HomePage'
import Dashboard from '../Pages/Dashboard'
import Courses from '../Pages/Courses'
import LoginPage from '../Pages/LoginPage'
import SignUpPage from '../Pages/SignUpPage'

const MainRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/interview" element={<InterviewPage />} />
        </Routes>
    </>
  )
}

export default MainRoutes