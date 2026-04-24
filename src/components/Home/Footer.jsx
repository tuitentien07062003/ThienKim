import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  // State quản lý Modal
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    title: '',
    contentKey: '' // 'privacy' hoặc 'terms'
  });

  const openModal = (type) => {
    setModalConfig({
      isOpen: true,
      title: type === 'privacy' ? t('legal.privacy.h1') : t('legal.terms.h1'),
      contentKey: type
    });
  };

  const closeModal = () => {
    setModalConfig({ ...modalConfig, isOpen: false });
  };

  const renderLegalContent = () => {
    const key = modalConfig.contentKey;
    if (!key) return null;
    return (
      <div className="space-y-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <div key={num} className="space-y-2">
            <h4 className="font-bold text-slate-900 text-lg">
              {t(`legal.${key}.h${num}`)}
            </h4>
            <p className="text-slate-600 leading-relaxed whitespace-pre-line">
              {t(`legal.${key}.p${num}`)}
            </p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <footer id="contact" className="bg-[#0b132c] text-slate-300 pt-16 pb-8 border-t border-slate-800 relative">
      {/* Đã thay đổi lưới grid tại đây: lg:grid-cols-12 */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
        
        {/* CỘT 1: THÔNG TIN CÔNG TY & LIÊN HỆ (Thu gọn thành 4 cột trên Desktop) */}
        <div className="lg:col-span-4 space-y-6">
          <h3 className="text-2xl font-serif font-bold text-white mb-6">
            {t('footer.companyName')}
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span className="text-sm">{t('footer.address')}</span>
            </div>

            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm">
                (+84) 0912 747 198
              </span>
            </div>

            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm">
                ctythienkim.garment@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="w-6 h-6 flex items-center justify-center bg-amber-500/10 rounded group-hover:bg-amber-500/20 transition-all">
                <span className="text-amber-500 font-bold text-[10px]">ALI</span>
              </div>
              <a href="https://alibaba.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-amber-500 transition-colors">
                Alibaba: Thien Kim Garment Co., Ltd
              </a>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="w-6 h-6 flex items-center justify-center bg-amber-500/10 rounded group-hover:bg-amber-500/20 transition-all">
                <span className="text-amber-500 font-bold text-[10px]">AMZ</span>
              </div>
              <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-amber-500 transition-colors">
                Amazon: Thien Kim Fashion Store
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800">
            <p className="text-sm font-bold text-amber-500 mb-1">{t('footer.techTitle')}</p>
            <p className="text-sm">{t('footer.techDesc')}</p>
          </div>
        </div>

        {/* CỘT 2: CÔNG TY (Chiếm 2 cột) */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">{t('footer.col1Title')}</h4>
          <ul className="space-y-3 text-sm">
            <li><button className="hover:text-amber-500 transition-colors">{t('footer.link1_1')}</button></li>
            <li><button className="hover:text-amber-500 transition-colors">{t('footer.link1_2')}</button></li>
            <li><button className="hover:text-amber-500 transition-colors">{t('footer.link1_3')}</button></li>
            <li><button className="hover:text-amber-500 transition-colors">{t('footer.link1_4')}</button></li>
          </ul>
        </div>

        {/* CỘT 3: HỖ TRỢ PHÁP LÝ (Chiếm 2 cột) */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">{t('footer.col2Title')}</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <button 
                onClick={() => openModal('privacy')}
                className="hover:text-amber-500 transition-colors text-left"
              >
                {t('footer.link2_1')}
              </button>
            </li>
            <li>
              <button 
                onClick={() => openModal('terms')}
                className="hover:text-amber-500 transition-colors text-left"
              >
                {t('footer.link2_2')}
              </button>
            </li>
            <li>
              <a href="#contact" className="hover:text-amber-500 transition-colors">
                {t('footer.link2_3')}
              </a>
            </li>
          </ul>
        </div>

        {/* CỘT 4: GOOGLE MAPS (Chiếm 4 cột mới thêm vào) */}
        <div className="lg:col-span-4 space-y-4">
           <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Bản đồ</h4>
           <div className="w-full h-48 md:h-full min-h-[200px] rounded-lg overflow-hidden border border-slate-800 shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4659.183749053677!2d106.78030685540558!3d10.895894445778524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d9dda21b4135%3A0xb686ec76cb5821e9!2sC%C3%94NG%20TY%20TNHH%20SXKD%20THI%C3%8AN%20KIM!5e0!3m2!1svi!2s!4v1776997856597!5m2!1svi!2s" 
                className="w-full h-full"
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ công ty Thiên Kim"
              ></iframe>
           </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} {t('footer.companyName')}. All rights reserved.</p>
      </div>

      {/* MODAL DIALOG (Giữ nguyên) */}
      {modalConfig.isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h2 className="text-2xl font-serif font-bold text-slate-900 leading-tight">
                {modalConfig.title}
              </h2>
              <button onClick={closeModal} className="p-2 rounded-full hover:bg-slate-200 text-slate-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-8 py-8 overflow-y-auto">
              <div className="prose prose-slate max-w-none">
                {renderLegalContent()}
              </div>
            </div>
            <div className="px-8 py-4 border-t border-slate-100 flex justify-end bg-slate-50">
              <button onClick={closeModal} className="bg-slate-900 text-white px-8 py-2.5 rounded-lg font-bold hover:bg-slate-800 transition-all">
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;