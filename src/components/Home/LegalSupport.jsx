import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const LegalSupport = ({ lang = 'vi' }) => {
  const [activeTab, setActiveTab] = useState('contact');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useRef();

  const content = {
    vi: {
      title: "Pháp Lý & Hỗ Trợ",
      subtitle: "Minh bạch trong mọi hợp tác",
      tabs: {
        privacy: "Chính sách Bảo mật",
        terms: "Điều khoản Dịch vụ",
        contact: "Hỗ trợ Liên hệ"
      },
      privacy: {
        h1: "1. Thu thập thông tin",
        p1: "Thiên Kim chỉ thu thập các thông tin cần thiết (Tên, Số điện thoại, Email, Tên công ty) khi quý khách chủ động liên hệ yêu cầu báo giá hoặc tư vấn dịch vụ gia công.",
        h2: "2. Mục đích sử dụng",
        p2: "Thông tin của đối tác được sử dụng duy nhất cho mục đích: Gửi báo giá, trao đổi tiến độ sản xuất, và gửi các tài liệu kỹ thuật liên quan đến đơn hàng.",
        h3: "3. Cam kết bảo mật",
        p3: "Chúng tôi cam kết tuyệt đối không mua bán, trao đổi hay cung cấp dữ liệu của đối tác cho bất kỳ bên thứ ba nào khi chưa có sự đồng ý bằng văn bản."
      },
      terms: {
        h1: "1. Quy định chung",
        p1: "Các điều khoản này áp dụng cho mọi giao dịch gia công và sản xuất hàng may mặc giữa Công ty TNHH SX KD Thiên Kim và Quý Đối tác.",
        h2: "2. Quyền và Trách nhiệm",
        p2: "Thiên Kim có trách nhiệm sản xuất đúng rập, đúng chất liệu và đúng thời gian đã cam kết trong hợp đồng. Đối tác có trách nhiệm cung cấp đầy đủ thông tin kỹ thuật và thanh toán đúng hạn.",
        h3: "3. Xử lý sự cố & Đổi trả",
        p3: "Mọi sản phẩm lỗi do quá trình sản xuất (đường may, thông số) sẽ được Thiên Kim thu hồi và xử lý/sản xuất lại miễn phí 100% theo tiêu chuẩn KCS."
      },
      contact: {
        desc: "Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng lắng nghe yêu cầu của bạn. Vui lòng để lại thông tin, chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.",
        formName: "Họ và tên / Tên công ty",
        formEmail: "Email liên hệ",
        formPhone: "Số điện thoại",
        formMessage: "Nội dung yêu cầu",
        formBtn: "Gửi Yêu Cầu",
        formBtnSending: "Đang gửi...",
        successTitle: "Gửi thành công!",
        successDesc: "Cảm ơn bạn đã liên hệ. Đội ngũ Thiên Kim sẽ phản hồi bạn trong thời gian sớm nhất.",
        sendAnother: "Gửi yêu cầu khác",
        errorMsg: "Lỗi hệ thống. Vui lòng thử lại sau!"
      }
    },
    en: {
      title: "Legal & Support",
      subtitle: "Transparency in every partnership",
      tabs: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        contact: "Contact Support"
      },
      privacy: {
        h1: "1. Information Collection",
        p1: "Thien Kim only collects necessary information (Name, Phone, Email, Company Name) when you proactively contact us for quotes or manufacturing consultation.",
        h2: "2. Use of Information",
        p2: "Partner data is strictly used for: Sending quotations, updating production progress, and exchanging order-related technical documents.",
        h3: "3. Confidentiality Commitment",
        p3: "We strictly commit to never selling, trading, or providing partner data to any third party without prior written consent."
      },
      terms: {
        h1: "1. General Provisions",
        p1: "These terms apply to all garment manufacturing and processing transactions between Thien Kim Co., Ltd. and our Partners.",
        h2: "2. Rights and Responsibilities",
        p2: "Thien Kim is responsible for producing precisely to the patterns, materials, and timeline committed in the contract. Partners must provide full technical details and timely payments.",
        h3: "3. Dispute Resolution & Returns",
        p3: "Any defective products due to manufacturing (stitching, sizing) will be recalled and re-produced by Thien Kim 100% free of charge according to QC standards."
      },
      contact: {
        desc: "Our team of experts is always ready to listen to your requirements. Please leave your details, and we will respond within 24 business hours.",
        formName: "Full Name / Company Name",
        formEmail: "Contact Email",
        formPhone: "Phone Number",
        formMessage: "Your Inquiry",
        formBtn: "Send Request",
        formBtnSending: "Sending...",
        successTitle: "Message Sent!",
        successDesc: "Thank you for reaching out. The Thien Kim team will get back to you as soon as possible.",
        sendAnother: "Send another request",
        errorMsg: "System error. Please try again later!"
      }
    }
  };

  const t = content[lang];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); 

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    console.log("Giá trị Service ID nhận được:", SERVICE_ID, "Template ID nhận được:", TEMPLATE_ID, "Public Key nhận được:", PUBLIC_KEY);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        form.current.reset(); 
      }, (error) => {
        setIsSubmitting(false);
        alert(t.contact.errorMsg); 
        console.error("EmailJS Error: ", error.text);
      });
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

  return (
    <section id="legal" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-amber-500 font-bold tracking-widest text-sm uppercase mb-2">{t.subtitle}</p>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-6">{t.title}</h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10" data-aos="fade-up" data-aos-delay="100">
          {Object.keys(t.tabs).map((key) => (
            <button
              key={key}
              onClick={() => {
                setActiveTab(key);
                setIsSubmitted(false);
              }}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {t.tabs[key]}
            </button>
          ))}
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 min-h-[400px]" data-aos="fade-in" data-aos-delay="200">
          
          {activeTab === 'privacy' && (
            <div className="space-y-6 text-slate-600 leading-relaxed animate-[fadeIn_0.5s_ease-in-out]">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{t.privacy.h1}</h3>
                <p>{t.privacy.p1}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{t.privacy.h2}</h3>
                <p>{t.privacy.p2}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{t.privacy.h3}</h3>
                <p>{t.privacy.p3}</p>
              </div>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-6 text-slate-600 leading-relaxed animate-[fadeIn_0.5s_ease-in-out]">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{t.terms.h1}</h3>
                <p>{t.terms.p1}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{t.terms.h2}</h3>
                <p>{t.terms.p2}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{t.terms.h3}</h3>
                <p>{t.terms.p3}</p>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="animate-[fadeIn_0.5s_ease-in-out]">
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center space-y-4 py-10 animate-[fadeIn_0.5s_ease-in-out]">
                  <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{t.contact.successTitle}</h3>
                  <p className="text-slate-600 max-w-md">{t.contact.successDesc}</p>
                  <button 
                    onClick={resetForm}
                    className="mt-6 text-amber-600 font-bold hover:text-amber-500 underline underline-offset-4 transition-colors"
                  >
                    {t.contact.sendAnother}
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-slate-600 mb-8 text-center">{t.contact.desc}</p>
                  
                  <form ref={form} className="space-y-5 max-w-2xl mx-auto" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">{t.contact.formName}</label>
                        <input name="user_name" required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">{t.contact.formPhone}</label>
                        <input name="user_phone" required type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">{t.contact.formEmail}</label>
                      <input name="user_email" required type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">{t.contact.formMessage}</label>
                      <textarea name="message" required rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`w-full text-white font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                        isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-amber-600 hover:bg-amber-500'
                      }`}
                    >
                      {isSubmitting && (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      )}
                      {isSubmitting ? t.contact.formBtnSending : t.contact.formBtn}
                    </button>
                  </form>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LegalSupport;