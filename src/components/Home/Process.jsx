import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Process = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);

  const stepImages = [
    "/Uploads/process1.jpg", "/Uploads/process2.jpg", "/Uploads/process3.jpg", "/Uploads/process4.jpg"  
  ];

  // Lấy mảng từ file JSON
  const steps = t('process.steps', { returnObjects: true }) || [];

  useEffect(() => {
    if (steps.length === 0) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-4xl font-serif font-bold text-slate-900">{t('process.title')}</h2>
          <p className="text-slate-500 uppercase tracking-widest text-sm font-bold">{t('process.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-500 border-l-4 ${
                  activeStep === index 
                  ? 'bg-slate-50 border-amber-500 shadow-md translate-x-2' 
                  : 'bg-white border-transparent opacity-60'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className={`text-2xl font-serif font-bold ${activeStep === index ? 'text-amber-600' : 'text-slate-300'}`}>
                    {step.id}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800">{step.name}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {stepImages.map((img, index) => (
              <div 
                key={index}
                className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
                  activeStep === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
                style={{ backgroundImage: `url('${img}')` }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-amber-500 font-bold tracking-widest text-sm uppercase">Bước {steps[activeStep]?.id}</span>
              <h3 className="text-3xl font-serif font-bold text-white mt-2">
                {steps[activeStep]?.name}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;