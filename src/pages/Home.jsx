import React, { useState } from 'react';
import Header from '../components/Home/Header';
import Hero from '../components/Home/Hero';
import Stats from '../components/Home/Stats';
import CoreValues from '../components/Home/CoreValues';
import Process from '../components/Home/Process';
import Quality from '../components/Home/Quality';
import Footer from '../components/Home/Footer';
import LegalSupport from '../components/Home/LegalSupport';

const Home = () => {
  const [lang, setLang] = useState('vi');

  return (
    <div className="font-sans text-slate-800 bg-white selection:bg-amber-500 selection:text-white">
      <Header lang={lang} setLang={setLang} />
      
      <main>
        <Hero lang={lang} />
        <Stats lang={lang} />
        <CoreValues lang={lang} />
        <Process lang={lang} />
        <Quality lang={lang} />

        <LegalSupport lang={lang} />
      </main>
      
      <Footer lang={lang} />
    </div>
  );
};

export default Home;