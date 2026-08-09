import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from "../layouts/MainLayout"

import Home from "../components/Home/Hero"
import About from "../components/Home/About"
import Courses from "../components/Home/Courses"
import Contact from "../components/Home/Contact"
import NotFound from "../components/Home/NotFound"
import Historys from '../components/Home/History'
import Teachers from '../components/Home/Teacher'
import Licenses from '../components/Home/License'


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='' element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='courses' element={<Courses />} />
                <Route path='contact' element={<Contact />} />
                <Route path='history' element={<Historys />} />
                <Route path='teacher' element={<Teachers />} />
                <Route path='license' element={<Licenses />} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes
