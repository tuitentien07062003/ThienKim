import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const isProductPage = location.pathname === '/product';

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  const getHomeLink = (hash) => isProductPage ? `/${hash}` : hash;

  const languages = [
    { code: 'vi', label: 'Tiếng Việt', countryCode: 'vn' },
    { code: 'en', label: 'English', countryCode: 'gb' },
    { code: 'cn', label: '中文', countryCode: 'cn' },
    { code: 'jp', label: '日本語', countryCode: 'jp' },
    { code: 'kr', label: '한국어', countryCode: 'kr' }
  ];

  const activeLang = languages.find(lng => i18n.language?.includes(lng.code)) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed w-full top-0 z-50 bg-slate-900/95 backdrop-blur-sm text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wider">
          <span className="text-white">Thiên </span>
          <span className="text-amber-500">Kim</span>
        </Link>

        <nav className="hidden md:flex gap-8 font-medium text-sm text-slate-300">
          <a href={getHomeLink("#home")} className={`hover:text-amber-500 transition-colors ${!isProductPage ? 'text-amber-500' : ''}`}>
            {t('header.home')}
          </a>

          <Link to="/product" className={`hover:text-amber-500 transition-colors ${isProductPage ? 'text-amber-500 font-bold' : ''}`}>
            {t('header.products')}
          </Link>

          <a href={getHomeLink("#process")} className="hover:text-amber-500 transition-colors">
            {t('header.process')}
          </a>
          <a href={getHomeLink("#quality")} className="hover:text-amber-500 transition-colors">
            {t('header.quality')}
          </a>
          <a href={getHomeLink("#contact")} className="hover:text-amber-500 transition-colors">
            {t('header.contact')}
          </a>
        </nav>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-all border border-transparent hover:border-slate-700"
          >
            <img 
              src={`https://flagcdn.com/w40/${activeLang.countryCode}.png`} 
              alt={activeLang.label}
              className="w-5 h-3.5 object-cover rounded-sm"
            />
            <span className="text-sm font-medium text-slate-200 uppercase">{activeLang.code}</span>
            <svg 
              className={`w-3 h-3 text-slate-500 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} 
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isLangOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-2xl overflow-hidden z-[100] py-1">
              {languages.map((lng) => {
                const isActive = i18n.language?.includes(lng.code);
                return (
                  <button
                    key={lng.code}
                    onClick={() => changeLanguage(lng.code)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                      isActive
                        ? 'bg-amber-500/10 text-amber-500 font-semibold'
                        : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                    }`}
                  >
                    <img 
                      src={`https://flagcdn.com/w40/${lng.countryCode}.png`} 
                      alt={lng.label}
                      className="w-5 h-3.5 object-cover rounded-sm shadow-sm"
                    />
                    <span>{lng.label}</span>
                    {isActive && (
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;