import React from 'react';

const Footer = ({ lang = 'vi' }) => {
  const content = {
    vi: {
      companyName: "Công ty TNHH SX KD Thiên Kim",
      address: "Thửa đất số 7887, tờ bản đồ số 5, Khu phố Tây A, Phường Đông Hòa, Thành phố Hồ Chí Minh, Việt Nam",
      techTitle: "CHI TIẾT KỸ THUẬT",
      techDesc: "MST: 3702482335 • Chứng nhận ISO 9001:2015",
      col1Title: "CÔNG TY",
      link1_1: "Tiêu chuẩn Sản xuất",
      link1_2: "Báo cáo Bền vững",
      link1_3: "Chuỗi cung ứng",
      link1_4: "Lịch sử của chúng tôi",
      col2Title: "PHÁP LÝ",
      link2_1: "Chính sách Bảo mật",
      link2_2: "Điều khoản Dịch vụ",
      link2_3: "Hỗ trợ Liên hệ",
      copyright: "© 2024 Thien Kim Garment Production & Trading Co., Ltd. Tất cả quyền được bảo lưu. MST: 3702482335"
    },
    en: {
      companyName: "Thien Kim Garment Production & Trading Co., Ltd",
      address: "Land parcel No. 7887, Map sheet No. 5, Tay A Quarter, Dong Hoa Ward, Ho Chi Minh City, Vietnam",
      techTitle: "TECHNICAL DETAILS",
      techDesc: "MST: 3702482335 • ISO 9001:2015 Certified",
      col1Title: "COMPANY",
      link1_1: "Manufacturing Standards",
      link1_2: "Sustainability Report",
      link1_3: "Supply Chain",
      link1_4: "Our History",
      col2Title: "LEGAL",
      link2_1: "Privacy Policy",
      link2_2: "Terms of Service",
      link2_3: "Contact Support",
      copyright: "© 2024 Thien Kim Garment Production & Trading Co., Ltd. All Rights Reserved. MST: 3702482335"
    }
  };

  const t = content[lang];

  return (
    <footer id="contact" className="bg-[#0b132c] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
        <div className="md:col-span-6 space-y-6">
          <h3 className="text-2xl font-serif font-bold text-white mb-6">{t.companyName}</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <p className="text-sm leading-relaxed">{t.address}</p>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <p className="text-sm">(+84) 0912 747 198</p>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <p className="text-sm">contact@thienkimgarment.com</p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800">
            <p className="text-sm font-bold text-amber-500 mb-1">{t.techTitle}</p>
            <p className="text-sm">{t.techDesc}</p>
          </div>
        </div>

        <div className="md:col-span-3 space-y-4">
          <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">{t.col1Title}</h4>
          <ul className="space-y-3 text-sm">
            <li>
            <button className="hover:text-amber-500 transition-colors">
                {t.link1_1}
            </button>
            </li>
            <li>
            <button className="hover:text-amber-500 transition-colors">
                {t.link1_2}
            </button>
            </li>
            <li>
            <button className="hover:text-amber-500 transition-colors">
                {t.link1_3}
            </button>
            </li>
            <li>
            <button className="hover:text-amber-500 transition-colors">
                {t.link1_4}
            </button>
            </li>
            
          </ul>
        </div>

        <div className="md:col-span-3 space-y-4">
          <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">{t.col2Title}</h4>
          <ul className="space-y-3 text-sm">
            <li>
            <button className="hover:text-amber-500 transition-colors">
                {t.link2_1}
            </button>
            </li>
            <li>
            <button className="hover:text-amber-500 transition-colors">
                {t.link2_2}
            </button>
            </li>
            <li><a href="#legal" className="hover:text-amber-500 transition-colors">{t.link2_3}</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
        <p>{t.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;