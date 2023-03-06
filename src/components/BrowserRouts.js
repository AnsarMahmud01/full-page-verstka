import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RouterLayout from './RouterLayout'
import ContactPage from './ContactPage'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import NotFoundPage from './NotFoundPage'
import SignIn from "./SignIn";


class BrowserRouts extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<RouterLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path='about' element={<AboutPage />} />
                        <Route path='contact' element={<ContactPage />} />
                        <Route path='*' element={<NotFoundPage />} />
                        <Route path='sign' element={<SignIn />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default BrowserRouts