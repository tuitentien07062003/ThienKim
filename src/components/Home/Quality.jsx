import React from 'react';
import { useTranslation } from 'react-i18next';

const Quality = () => {
  const { t } = useTranslation();

  return (
    <section id="quality" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm block">{t('quality.tag')}</span>
            <h2 className="text-4xl lg:text-6xl font-serif font-bold leading-tight">
              {t('quality.titlePrefix')} <br />
              <span className="text-amber-500">{t('quality.titleHighlight')}</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">{t('quality.desc')}</p>
          </div>
          
          <div className="space-y-6">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{t(`quality.f${num}Title`)}</h4>
                  <p className="text-slate-400">{t(`quality.f${num}Desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img src="/Uploads/product2.jpg" alt="Quality" className="w-full max-h-[500px] object-cover rounded-2xl shadow-2xl border border-white/10" />
      </div>
    </section>
  );
};

export default Quality;