import React from 'react';
import { useTranslation } from 'react-i18next';

const Stats = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-4xl font-serif font-bold text-slate-900" data-aos="fade-right">{t('stats.title')}</h2>
          <p className="text-slate-600 leading-relaxed" data-aos="fade-right" data-aos-delay="100">{t('stats.desc')}</p>
          <div className="pt-4" data-aos="fade-right" data-aos-delay="200">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('stats.taxLabel')}</span>
            <p className="text-xl font-mono font-bold text-slate-700">3702482335</p>
          </div>
        </div>
        
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-5xl font-bold text-amber-600 mb-2">{t('stats.stat1Num')}</h3>
            <p className="text-sm font-bold tracking-wider text-slate-500 uppercase">{t('stats.stat1Label')}</p>
            <div className="w-10 h-1 bg-amber-500 mt-4"></div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-5xl font-bold text-amber-600 mb-2">{t('stats.stat2Num')}</h3>
            <p className="text-sm font-bold tracking-wider text-slate-500 uppercase">{t('stats.stat2Label')}</p>
            <div className="w-10 h-1 bg-amber-500 mt-4"></div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100" data-aos="fade-up" data-aos-delay="600">
            <h3 className="text-5xl font-bold text-amber-600 mb-2">{t('stats.stat3Num')}</h3>
            <p className="text-sm font-bold tracking-wider text-slate-500 uppercase">{t('stats.stat3Label')}</p>
            <div className="w-10 h-1 bg-amber-500 mt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;