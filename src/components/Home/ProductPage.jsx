import React, { useState, useRef, useMemo } from "react";
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { mockProducts } from "../../api/product";
import Header from "../Home/Header";

const ITEMS_PER_PAGE = 6;

const ProductsPage = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState("all");
  const [showDialog, setShowDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const form = useRef();

    const categories = [
    { key: "all", label: t('product.all') },
    { key: "ao-thun", label: t('product.categories.ao-thun') },
    { key: "ao-khoac", label: t('product.categories.ao-khoac') },
    { key: "ao-tre-em", label: t('product.categories.ao-tre-em') }
    ];
  const filteredProducts = useMemo(() => {
    const all = Object.values(mockProducts).flat();
    return active === "all" ? all : mockProducts[active] || [];
  }, [active]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const handleCategoryChange = (key) => {
    setActive(key);
    setCurrentPage(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        form.current.reset();
      }, (error) => {
        setIsSubmitting(false);
        alert(t('legal.contact.errorMsg'));
      });
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />

      <div className="max-w-7xl mx-auto pt-28 pb-20 px-6 flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-1/4">
          <div className="sticky top-28 space-y-6">
            <div className="bg-white rounded-3xl p-2 shadow-sm border border-slate-100">
              <div className="px-6 py-4 border-b border-slate-50">
                <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  {t(`product.category`)}
                </h2>
              </div>
              <div className="p-2 flex flex-col gap-1">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => handleCategoryChange(cat.key)}
                    className={`text-left px-5 py-3.5 rounded-2xl transition-all font-semibold ${
                      active === cat.key ? "bg-slate-900 text-white shadow-lg" : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowDialog(true)}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              {t('product.contact')}
            </button>
          </div>
        </aside>

        <main className="lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[600px] content-start">
            <AnimatePresence mode="popLayout">
              {currentItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={item.id}
                  className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all border border-slate-100 group flex flex-col h-full"
                >
                  <div className="h-64 rounded-2xl overflow-hidden bg-slate-50 mb-4 flex items-center justify-center p-4">
                    <img src={item.img} alt={item.title} className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 px-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm mt-2 line-clamp-2 px-2 pb-2 flex-grow">{item.desc}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-16">
              <button 
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-slate-200 text-slate-600 hover:border-amber-500 hover:text-amber-500 disabled:opacity-30 disabled:hover:border-slate-200 disabled:hover:text-slate-600 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
              </button>
              
              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-12 h-12 rounded-2xl font-bold transition-all ${
                      currentPage === i + 1 
                        ? "bg-slate-900 text-white shadow-lg shadow-slate-200" 
                        : "bg-white text-slate-600 border border-slate-100 hover:bg-slate-50"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button 
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => prev + 1)}
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-slate-200 text-slate-600 hover:border-amber-500 hover:text-amber-500 disabled:opacity-30 disabled:hover:border-slate-200 disabled:hover:text-slate-600 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          )}
        </main>
      </div>

      <AnimatePresence>
        {showDialog && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-[100] px-4 py-10"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-[32px] shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col max-h-full"
            >
              <div className="p-8 lg:p-10 overflow-y-auto custom-scroll">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-slate-900">{t('legal.tabs.contact')}</h3>
                    <p className="text-slate-500 text-sm mt-1 uppercase tracking-widest font-bold">{t('legal.subtitle')}</p>
                  </div>
                  <button onClick={() => {setShowDialog(false); setIsSubmitted(false);}} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
                  </button>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12 bg-green-50 rounded-3xl border border-green-100 flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h4 className="text-xl font-bold text-green-700">{t('legal.contact.successTitle')}</h4>
                    <p className="text-slate-600 px-6 text-center">{t('legal.contact.successDesc')}</p>
                    <button onClick={() => setIsSubmitted(false)} className="mt-6 px-8 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all">
                      {t('legal.contact.sendAnother')}
                    </button>
                  </div>
                ) : (
                  <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">{t('legal.form.name')}</label>
                        <input name="user_name" type="text" required className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-amber-500 transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">{t('legal.form.email')}</label>
                        <input name="user_email" type="email" required className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-amber-500 transition-all" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">{t('legal.form.phone')}</label>
                      <input name="user_phone" type="text" className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-amber-500 transition-all" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">{t('legal.form.message')}</label>
                      <textarea name="message" required rows="4" className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-amber-500 resize-none transition-all"></textarea>
                    </div>

                    <button 
                      type="submit" disabled={isSubmitting}
                      className="w-full bg-amber-600 text-white font-bold py-4 rounded-2xl hover:bg-amber-500 disabled:bg-slate-400 transition-all flex justify-center items-center gap-3 shadow-lg shadow-amber-200/50"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        t('legal.form.send')
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductsPage;