import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div >
            <Navbar/>
            <div className='bg-secondary min-h-screen flex flex-col'>
                <main className='grow w-11/12 mx-auto'>
                <Outlet>

                </Outlet>
            </main>
            <Footer/>
            </div>
        </div>
    );
};

export default MainLayout;