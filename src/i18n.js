import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationVI from './locales/vi/translationVN.json';
import translationEN from './locales/en/translationEN.json';
import translationZH from './locales/cn/translationCN.json';
import translationJA from './locales/jp/translationJP.json';
import translationKO from './locales/kr/translationKR.json';

const resources = {
  vi: { translation: translationVI },
  en: { translation: translationEN },
  cn: { translation: translationZH },
  jp: { translation: translationJA },
  kr: { translation: translationKO },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'vi', // Ngôn ngữ dự phòng khi không tìm thấy ngôn ngữ yêu cầu
    debug: false, // Chuyển thành true nếu bạn muốn xem log chi tiết trong console

    interpolation: {
      escapeValue: false,
    },
    
    // Cấu hình cho detector
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'], // Lưu lựa chọn của người dùng vào localStorage
    },
  });

export default i18n;