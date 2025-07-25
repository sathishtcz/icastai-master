import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header/Header'
import Register from '../shared/components/Registerbanner/Register'
import Footer from './Footer/Footer'

export default function Main() {

    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <>
            <Header />
            <main className={`w-auto mx-auto md:mt-5 mt-0 ${isHome ? 'lg:mt-[100px] 2xl:mt-[185px] ' : 'lg:mt-[110px]'}`}>
                <Outlet />
            </main>
            <Register />
            <Footer />
        </>
    )
}
