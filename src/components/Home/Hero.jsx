import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-slate-900 text-white pt-20 pb-10 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat w-full h-full"
        style={{ backgroundImage: "url('/Uploads/hero.jpeg')" }}
      ></div>
      <div className="absolute inset-0 bg-slate-900/60 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <div className="space-y-6">
          <div data-aos="fade-down">
            <span className="inline-block py-1 px-3 rounded text-xs font-bold tracking-widest bg-amber-900/40 text-amber-500 border border-amber-500/20">
              {t('hero.tag')}
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight" data-aos="fade-right" data-aos-delay="200">
            {t('hero.titlePrefix')} <br />
            <span className="text-amber-500">{t('hero.titleHighlight')}</span> <br />
            {t('hero.titleSuffix')}
          </h1>
          
          <p className="text-slate-300 max-w-lg text-lg" data-aos="fade-right" data-aos-delay="400">
            {t('hero.desc')}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4" data-aos="fade-up" data-aos-delay="600">
            <button className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded transition-all shadow-lg shadow-amber-900/20">
              {t('hero.btn1')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;