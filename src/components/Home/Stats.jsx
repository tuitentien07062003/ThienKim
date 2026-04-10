import React from 'react';

const Stats = ({ lang = 'vi' }) => {
  const content = {
    vi: {
      title: "Di Sản Kế Thừa",
      desc: "Với hơn một thập kỷ chuyên môn trong ngành, chúng tôi xây dựng quan hệ đối tác dựa trên nền tảng minh bạch và tuân thủ pháp lý.",
      taxLabel: "Mã Số Thuế",
      stat1Num: "10+",
      stat1Label: "Năm Kinh Nghiệm",
      stat2Num: "100+", 
      stat2Label: "Đối Tác Doanh Nghiệp",
      stat3Num: "5+",
      stat3Label: "Quốc Gia Xuất Khẩu"
    },
    en: {
      title: "Certified Heritage",
      desc: "With over a decade of industry expertise, we build partnerships on a foundation of transparency and legal compliance.",
      taxLabel: "BUSINESS IDENTIFICATION",
      stat1Num: "10+",
      stat1Label: "YEARS OF EXPERIENCE",
      stat2Num: "100+", 
      stat2Label: "CORPORATE PARTNERS",
      stat3Num: "5+",
      stat3Label: "EXPORT COUNTRIES"
    }
  };

  const t = content[lang];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
        
        <div className="lg:col-span-1 space-y-4" data-aos="fade-right">
          <h2 className="text-3xl font-serif font-bold text-slate-900">{t.title}</h2>
          <p className="text-slate-600">{t.desc}</p>
          <div className="pt-4 text-sm">
            <p className="text-slate-500 font-bold uppercase tracking-wider">{t.taxLabel}</p>
            <p className="text-xl font-bold text-slate-900">3702482335</p>
          </div>
        </div>
        
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-center" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-5xl font-bold text-amber-600 mb-2">{t.stat1Num}</h3>
            <p className="text-sm font-bold tracking-wider text-slate-500 uppercase">{t.stat1Label}</p>
            <div className="w-10 h-1 bg-amber-500 mt-4"></div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-center" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-5xl font-bold text-amber-600 mb-2">{t.stat2Num}</h3>
            <p className="text-sm font-bold tracking-wider text-slate-500 uppercase">{t.stat2Label}</p>
            <div className="w-10 h-1 bg-amber-500 mt-4"></div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-center" data-aos="fade-up" data-aos-delay="600">
            <h3 className="text-5xl font-bold text-amber-600 mb-2">{t.stat3Num}</h3>
            <p className="text-sm font-bold tracking-wider text-slate-500 uppercase">{t.stat3Label}</p>
            <div className="w-10 h-1 bg-amber-500 mt-4"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;