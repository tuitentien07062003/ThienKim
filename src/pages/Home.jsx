import React from 'react';
import Header from '../components/Home/Header';
import Hero from '../components/Home/Hero';
import Stats from '../components/Home/Stats';
import CoreValues from '../components/Home/CoreValues';
import Process from '../components/Home/Process';
import Quality from '../components/Home/Quality';
import Footer from '../components/Home/Footer';
import LegalSupport from '../components/Home/LegalSupport';
import ChatBox from '../components/Home/ChatBox';
import ProductStorytelling from '../components/Home/StoryTelling';
import FeaturedProducts from '../components/Home/FeartureProduct';

const Home = () => {

  return (
    <div className="font-sans text-slate-800 bg-white selection:bg-amber-500 selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <ProductStorytelling />
        <FeaturedProducts />
        <Stats />
        <CoreValues />
        <Process />
        <Quality />

        <LegalSupport />
        <ChatBox />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;