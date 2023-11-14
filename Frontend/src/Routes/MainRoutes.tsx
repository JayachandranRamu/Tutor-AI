import React from 'react'
import { Routes,Route } from 'react-router-dom'


import InterviewPage from '../Pages/InterviewPage'
import HomePage from '../Pages/HomePage'
import Dashboard from '../Pages/Dashboard'
import Courses from '../Pages/Courses'
import LoginPage from '../Pages/LoginPage'
import SignUpPage from '../Pages/SignUpPage'
import SingleInterviewPage from '../Pages/SingleInterviewPage'
import ReportPage from '../Pages/InterviewPage'

const MainRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/interview" element={<Courses />} />
           <Route path='/report/:id' element={<ReportPage />}/>
            <Route path="/interview/:id" element={<SingleInterviewPage />} />
        </Routes>
    </>
  )
}

export default MainRoutes