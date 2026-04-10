import React from 'react';

const Quality = ({ lang = 'vi' }) => {
  const content = {
    vi: {
      tag: "Tiêu Chuẩn Thiên Kim",
      titlePrefix: "Vượt Trên",
      titleHighlight: "Bề Mặt Nhìn Thấy",
      desc: "Chúng tôi chỉ nhập nguồn nguyên liệu từ các nhà máy được chứng nhận bền vững, đảm bảo rằng kỹ thuật chế tác chính xác của chúng tôi bắt đầu bằng những vật liệu tốt nhất. Mỗi đường may là một minh chứng cho di sản công nghiệp của chúng tôi.",
      f1Title: "Vải Bền Vững",
      f1Desc: "Đạt Tiêu chuẩn Tái chế Toàn cầu (GRS) và chứng nhận Oeko-Tex.",
      f2Title: "Chế Tác Chính Xác",
      f2Desc: "Hệ thống cắt và hoàn thiện tự động hiện đại, công nghệ cao.",
      f3Title: "Cam Kết Nhân Đạo",
      f3Desc: "Tuyệt đối không sử dụng da thật và lông động vật trong toàn bộ quy trình sản xuất."
    },
    en: {
      tag: "THE THIEN KIM STANDARD",
      titlePrefix: "Beyond the",
      titleHighlight: "Visible Surface",
      desc: "We source exclusively from certified sustainable mills, ensuring that our precision craftsmanship starts with the finest ethical materials. Every seam is a testament to our industrial heritage.",
      f1Title: "Sustainable Fabrics",
      f1Desc: "Global Recycled Standard (GRS) and Oeko-Tex certified materials.",
      f2Title: "Precision Craftsmanship",
      f2Desc: "State-of-the-art automated cutting and finishing systems.",
      f3Title: "Cruelty-Free Commitment",
      f3Desc: "Strictly prohibiting the use of real animal fur and leather in all of our manufacturing processes."
    }
  };

  const t = content[lang];

  return (
    <section id="quality" className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-4 h-[400px] lg:h-[500px]">
          <div className="bg-slate-700 rounded-lg overflow-hidden row-span-2">
             <img src="/Uploads/product1.jpg" className="w-full h-full object-cover" alt="Fabric 1"/>
          </div>
          <div className="bg-slate-800 rounded-lg overflow-hidden">
             <img src="/Uploads/product2.jpg" className="w-full h-full object-cover" alt="Fabric 2"/>
          </div>
          <div className="bg-slate-600 rounded-lg overflow-hidden">
             <img src="/Uploads/product3.jpg" className="w-full h-full object-cover" alt="Fabric 3"/>
          </div>
        </div>

        <div className="space-y-8">
          <div data-aos="fade-up">
            <p className="text-amber-500 font-bold tracking-widest text-sm uppercase mb-2">{t.tag}</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold leading-tight">{t.titlePrefix} <br/><span className="text-amber-500">{t.titleHighlight}</span></h2>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            {t.desc}
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4" data-aos="fade-up" data-aos-delay="200">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">{t.f1Title}</h4>
                <p className="text-slate-400">{t.f1Desc}</p>
              </div>
            </div>
            
            <div className="flex gap-4" data-aos="fade-up" data-aos-delay="300">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">{t.f2Title}</h4>
                <p className="text-slate-400">{t.f2Desc}</p>
              </div>
            </div>

            <div className="flex gap-4" data-aos="fade-up" data-aos-delay="400">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">{t.f3Title}</h4>
                <p className="text-slate-400">{t.f3Desc}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;