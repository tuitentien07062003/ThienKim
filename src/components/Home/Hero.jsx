import React from 'react';

const Hero = ({ lang = 'vi' }) => {
  const content = {
    vi: {
      tag: "THÀNH LẬP TỪ 2016",
      titlePrefix: "Thiên Kim —",
      titleHighlight: "Nâng Tầm Giá Trị",
      titleSuffix: "Qua Từng Đường Kim",
      desc: "Điểm đến hàng đầu cho sản xuất may mặc độ chính xác cao, mang lại chất lượng chế tác xuất khẩu cho các đối tác doanh nghiệp toàn cầu.",
      btn1: "Nhận Báo Giá"
    },
    en: {
      tag: "ESTABLISHED SINCE 2016",
      titlePrefix: "Thien Kim —",
      titleHighlight: "Elevating Value",
      titleSuffix: "Through Every Stitch",
      desc: "A premier destination for high-precision garment manufacturing, delivering export-quality craftsmanship for global corporate partners.",
      btn1: "Get a Quote"
    }
  };

  const t = content[lang];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-slate-900 text-white pt-20 overflow-hidden">
      
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat w-full h-full"
        style={{ backgroundImage: "url('/Uploads/hero.jpeg')" }}
      ></div>

      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0b132c] via-[#0b132c]/80 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        
        <div className="space-y-6">
          <div data-aos="fade-down">
            <span className="inline-block py-1 px-3 rounded text-xs font-bold tracking-widest bg-amber-900/40 text-amber-500 border border-amber-500/20">
              {t.tag}
            </span>
          </div>
          
          <h1 
            className="text-5xl lg:text-7xl font-serif font-bold leading-tight"
            data-aos="fade-right" 
            data-aos-delay="200"
          >
            {t.titlePrefix} <br />
            <span className="text-amber-500">{t.titleHighlight}</span> <br />
            {t.titleSuffix}
          </h1>
          
          <p 
            className="text-slate-300 max-w-lg text-lg"
            data-aos="fade-right" 
            data-aos-delay="400"
          >
            {t.desc}
          </p>
          
          <div 
            className="flex flex-wrap gap-4 pt-4"
            data-aos="fade-up" 
            data-aos-delay="600"
          >
            <a href="#legal" className="px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded transition-colors inline-block text-center">
                {t.btn1}
            </a>
          </div>
        </div>
        
        <div className="hidden lg:block"></div>

      </div>
    </section>
  );
};

export default Hero;