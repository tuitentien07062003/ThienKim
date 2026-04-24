import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const LegalSupport = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); 

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        form.current.reset(); 
      }, (error) => {
        setIsSubmitting(false);
        alert(t('legal.contact.errorMsg')); 
        console.error("EmailJS Error: ", error.text);
      });
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <style>{`
        .custom-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: #f1f5f9; 
          border-radius: 8px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #d97706; 
          border-radius: 8px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: #b45309; 
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-4xl font-serif font-bold text-slate-900">{t('legal.title')}</h2>
          <p className="text-slate-500 uppercase tracking-widest text-sm font-bold">{t('legal.subtitle')}</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 grid grid-cols-1 lg:grid-cols-12 h-[600px]">
          
          <div className="lg:col-span-4 bg-slate-900 p-8 text-white flex flex-col gap-4">
            {['privacy', 'terms', 'contact'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)} 
                className={`p-4 rounded-xl text-left transition-all ${activeTab === tab ? 'bg-amber-600 shadow-lg' : 'hover:bg-slate-800 text-slate-300'}`}
              >
                {t(`legal.tabs.${tab}`)}
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 p-10 flex flex-col h-full bg-white min-h-0">
            {activeTab !== 'contact' ? (
              <div className="flex-1 flex flex-col min-h-0">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 shrink-0">{t(`legal.tabs.${activeTab}`)}</h3>
                
                <div className="flex-1 overflow-y-auto pr-6 space-y-6 custom-scroll">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(num => {
                    const heading = t(`legal.${activeTab}.h${num}`, { defaultValue: '' });
                    const paragraph = t(`legal.${activeTab}.p${num}`, { defaultValue: '' });
                    
                    if (!heading && !paragraph) return null;

                    return (
                      <div key={num} className="space-y-2 text-slate-600 leading-relaxed">
                        {heading && <h4 className="font-bold text-slate-800">{heading}</h4>}
                        {paragraph && <p className="text-justify">{paragraph}</p>}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col min-h-0 overflow-y-auto pr-6 custom-scroll">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 shrink-0">{t('legal.tabs.contact')}</h3>

                <div className="text-slate-600 mb-6">
                  <p>{t('legal.tabs.desc')}</p>
                </div>
                
                {isSubmitted ? (
                  <div className="text-center py-12 bg-green-50 rounded-2xl border border-green-100 flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h4 className="text-xl font-bold text-green-700">{t('legal.contact.successTitle')}</h4>
                    <p className="text-slate-600">{t('legal.contact.successDesc')}</p>
                    
                    <button 
                      onClick={resetForm}
                      className="mt-6 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                    >
                      {t('legal.contact.sendAnother')}
                    </button>
                  </div>
                ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="user_name" className="text-sm font-semibold text-slate-700">
                        {t('legal.form.name')}
                      </label>
                      <input 
                        id="user_name"
                        name="user_name" 
                        type="text" 
                        required 
                        className="w-full p-4 bg-slate-50 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-amber-500 transition-all" 
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="user_email" className="text-sm font-semibold text-slate-700">
                        {t('legal.form.email')}
                      </label>
                      <input 
                        id="user_email"
                        name="user_email" 
                        type="email" 
                        required 
                        className="w-full p-4 bg-slate-50 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-amber-500 transition-all" 
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="user_phone" className="text-sm font-semibold text-slate-700">
                        {t('legal.form.phone')}
                    </label>
                    <input 
                      id="user_phone"
                      name="user_phone" 
                      type="text" 
                      className="w-full p-4 bg-slate-50 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-amber-500 transition-all" 
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-700">
                        {t('legal.form.message')}
                    </label>
                    <textarea 
                      id="message"
                      name="message" 
                      required 
                      rows="4" 
                      className="w-full p-4 bg-slate-50 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-amber-500 resize-none transition-all"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full bg-amber-600 text-white font-bold py-4 rounded-lg hover:bg-amber-500 disabled:bg-slate-400 transition-all flex justify-center items-center gap-2 shadow-sm mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t('legal.form.sending')}
                      </>
                    ) : (
                      t('legal.form.send')
                    )}
                  </button>
                </form>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalSupport;