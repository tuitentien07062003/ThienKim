import React from 'react';

const Header = ({ lang, setLang }) => {
  const text = {
    vi: { home: "Trang chủ", process: "Quy trình", quality: "Chất lượng", contact: "Liên hệ" },
    en: { home: "Home", process: "Process", quality: "Quality", contact: "Contact" }
  };

  const t = text[lang];

  return (
    <header className="fixed w-full top-0 z-50 bg-slate-900/95 backdrop-blur-sm text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wider">
          <span className="text-white">Thiên </span>
          <span className="text-amber-500">Kim</span>
        </div>

        <nav className="hidden md:flex gap-8 font-medium text-sm text-slate-300">
          <a href="#home" className="hover:text-amber-500 transition-colors text-amber-500">{t.home}</a>
          <a href="#process" className="hover:text-amber-500 transition-colors">{t.process}</a>
          <a href="#quality" className="hover:text-amber-500 transition-colors">{t.quality}</a>
          <a href="#contact" className="hover:text-amber-500 transition-colors">{t.contact}</a>
        </nav>

        <div className="flex gap-4 text-sm font-semibold items-center cursor-pointer">
          <button 
            onClick={() => setLang('vi')} 
            className={`transition-colors ${lang === 'vi' ? 'text-amber-500 border-b-2 border-amber-500' : 'text-slate-400 hover:text-white'}`}
          >
            VI
          </button>
          <span className="text-slate-600">|</span>
          <button 
            onClick={() => setLang('en')} 
            className={`transition-colors ${lang === 'en' ? 'text-amber-500 border-b-2 border-amber-500' : 'text-slate-400 hover:text-white'}`}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;