import React from 'react';

const CoreValues = ({ lang = 'vi' }) => {
  const content = {
    vi: {
      title: "Định Hướng Phát Triển",
      mission: "Sứ Mệnh",
      missionDesc: "Mang đến những sản phẩm may mặc có chất lượng 'vàng', góp phần nâng tầm diện mạo và giá trị thương hiệu cho đối tác.",
      vision: "Tầm Nhìn",
      visionDesc: "Trở thành xí nghiệp gia công may mặc hàng đầu khu vực, tiên phong trong việc ứng dụng công nghệ xanh và sản xuất bền vững.",
      core: "Giá Trị Cốt Lõi",
      coreDesc: "Tận Tâm trong từng đường kim. Chất Lượng trong từng thước vải. Uy Tín trong mọi cam kết."
    },
    en: {
      title: "Development Orientation",
      mission: "Our Mission",
      missionDesc: "Delivering 'gold' quality garments, contributing to elevating the appearance and brand value for our partners.",
      vision: "Our Vision",
      visionDesc: "To become the leading garment processing enterprise in the region, pioneering in applying green technology.",
      core: "Core Values",
      coreDesc: "Dedication in every stitch. Quality in every yard of fabric. Prestige in every commitment."
    }
  };

  const t = content[lang];

  return (
    <section className="min-h-screen flex items-center bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-slate-900 mb-6">{t.title}</h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-10 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-2xl text-center group border border-slate-100" data-aos="fade-up" data-aos-delay="100">
            <div className="w-20 h-20 mx-auto bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">{t.mission}</h3>
            <p className="text-slate-600 leading-relaxed text-lg">{t.missionDesc}</p>
          </div>

          <div className="p-10 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-2xl text-center group border border-slate-100" data-aos="fade-up" data-aos-delay="300">
            <div className="w-20 h-20 mx-auto bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">{t.vision}</h3>
            <p className="text-slate-600 leading-relaxed text-lg">{t.visionDesc}</p>
          </div>

          <div className="p-10 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-2xl text-center group border border-slate-100" data-aos="fade-up" data-aos-delay="500">
            <div className="w-20 h-20 mx-auto bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">{t.core}</h3>
            <p className="text-slate-600 leading-relaxed text-lg">{t.coreDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;