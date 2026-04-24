import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { mockProducts } from "../../api/product";

const FeaturedProducts = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState("ao-thun");

  const products = mockProducts[active].slice(0, 3);

  const categories = [
    { key: "ao-thun", label: t('featured.categories.ao-thun') },
    { key: "ao-khoac", label: t('featured.categories.ao-khoac') },
    { key: "ao-tre-em", label: t('featured.categories.ao-tre-em') }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        <div className="max-w-3xl text-center mb-16 space-y-6 flex flex-col items-center">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">
            {t('featured.categories.' + active)}
          </span>
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight">
            {t('featured.title')}
          </h2>
          <p className="text-slate-600 leading-relaxed text-xl max-w-2xl">
            {t('featured.desc')}
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center pt-8">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`px-8 py-4 rounded-full text-base font-bold transition-all duration-300 ${
                  active === cat.key
                    ? "bg-slate-900 text-white shadow-xl shadow-slate-200"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {products.map((item, index) => (
              <motion.div
                key={`${active}-${item.id}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                className="bg-slate-50 p-6 rounded-3xl border border-slate-100 group hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 flex flex-col h-full"
              >
                <div className="h-60 flex items-center justify-center mb-8 overflow-hidden rounded-2xl bg-white p-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3 px-2">
                  {t(`featured.items.${item.id}.title`, { defaultValue: item.title })}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed mb-6 px-2 flex-grow">
                  {t(`featured.items.${item.id}.desc`, { defaultValue: item.desc })}
                </p>
                <div className="w-10 h-1 bg-amber-500 mt-auto mx-2 group-hover:w-20 transition-all"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="pt-20">
          <Link
            to="/product"
            className="inline-flex items-center gap-3 bg-amber-600 text-white font-bold px-12 py-5 rounded-full hover:bg-amber-500 hover:gap-5 transition-all duration-300 shadow-lg shadow-amber-200 active:scale-95"
          >
            <span className="text-lg">{t(`featured.all`)}</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;