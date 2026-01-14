import React from 'react';
import BannerSection from '../components/home/BannerSection'
import PopularBooksSection from '../components/home/PopularBooksSection';
import RecommendedBooksSection from '../components/home/RecommendedBooksSection';
import WhyBookwormSection from '../components/home/WhyBookwormSection';
import HowWeWorkSection from '../components/home/HowWeWorkSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import StatisticsSection from '../components/home/StatisticsStection';

const Home = () => {
    return (
        <div className=''>
            <BannerSection/>
            <PopularBooksSection/>
            <RecommendedBooksSection/>
            <WhyBookwormSection/>
            <HowWeWorkSection/>
            <TestimonialsSection/>
            <StatisticsSection/>
        </div>
    );
};

export default Home;