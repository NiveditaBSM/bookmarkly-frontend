import React from 'react';
import Header from '../subcomponents/landing/Header';
import Features from '../subcomponents/landing/Features';
import CallToAction from '../subcomponents/landing/CallToAction';
import Footer from '../subcomponents/landing/Footer';

const LandingPage = () => {
    return (
        <div className="bg-gray-50 text-gray-800">
            {/* <div className='h-20 w-20'>
                <img src='./BookmarklyLogo.svg'></img>
            </div> */}
            <Header />
            <Features />
            <CallToAction />
            <Footer />
        </div>
    );
}

export default LandingPage;