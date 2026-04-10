import React, { useState, useEffect } from 'react';

const Process = ({ lang = 'vi' }) => {
  const [activeStep, setActiveStep] = useState(0);

  const stepImages = [
    "/Uploads/process1.jpg", 
    "/Uploads/process2.jpg", 
    "/Uploads/process3.jpg", 
    "/Uploads/process4.jpg"  
  ];

  const content = {
    vi: {
      title: "Quy Trình Sản Xuất",
      subtitle: "Tiêu chuẩn hóa mọi công đoạn",
      steps: [
        { id: "01", name: "Thiết Kế", desc: "Tiếp nhận bản vẽ, in bản vẽ chuẩn xác theo yêu cầu khách hàng." },
        { id: "02", name: "Xử Lý & Cắt Vải", desc: "Trải vải và cắt tự động bằng máy CNC laser theo bản thiết kế." },
        { id: "03", name: "May Vá / Gia Công", desc: "Đội ngũ thợ may lành nghề tiến hành ráp nối các chi tiết." },
        { id: "04", name: "Đóng Gói & KCS", desc: "Kiểm tra chất lượng nghiêm ngặt, ủi phẳng và đóng gói xuất xưởng." }
      ]
    },
    en: {
      title: "Production Process",
      subtitle: "Standardizing every stage",
      steps: [
        { id: "01", name: "Design & Pattern", desc: "Receive requirements and create precise patterns." },
        { id: "02", name: "Fabric Processing", desc: "Fabric spreading and automated CNC laser cutting based on the design." },
        { id: "03", name: "Sewing & Stitching", desc: "Skilled tailors assemble the garment pieces with precision." },
        { id: "04", name: "QC & Packaging", desc: "Strict Quality Control, ironing, and final packaging for shipment." }
      ]
    }
  };

  const t = content[lang];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % t.steps.length);
    }, 3000); 

    return () => clearInterval(timer);
  }, [t.steps.length]);

  return (
    <section id="process" className="min-h-screen flex items-center bg-slate-900 text-white py-24 relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
           style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23f59e0b\\' fill-opacity=\\'0.4\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="mb-12 md:mb-16" data-aos="fade-right">
          <p className="text-amber-500 font-bold tracking-widest text-sm uppercase mb-2">{t.subtitle}</p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold">{t.title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="space-y-4 relative" data-aos="fade-right">
            
            <div className="absolute top-8 bottom-8 left-8 w-0.5 bg-slate-800 z-0 hidden md:block"></div>

            {t.steps.map((step, index) => (
              <div 
                key={index} 
                onMouseEnter={() => setActiveStep(index)} 
                className={`relative z-10 flex items-start gap-6 p-6 rounded-2xl transition-all duration-300 cursor-pointer border ${
                  activeStep === index 
                    ? 'bg-slate-800/80 border-amber-500/50 shadow-lg' 
                    : 'bg-transparent border-transparent hover:bg-slate-800/40'
                }`}
              >
                <div className={`w-16 h-16 flex-shrink-0 rounded-full flex items-center justify-center text-xl font-bold border-4 transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-amber-500 text-slate-900 border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.5)]' 
                    : 'bg-slate-900 text-slate-400 border-slate-800'
                }`}>
                  {step.id}
                </div>
                
                <div className="pt-3">
                  <h3 className={`text-xl font-bold mb-2 transition-colors ${activeStep === index ? 'text-amber-500' : 'text-white'}`}>
                    {step.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative h-[450px] lg:h-[600px] w-full rounded-2xl overflow-hidden border border-slate-700 shadow-2xl" data-aos="fade-left">
            {stepImages.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={t.steps[index].name}
                className={`absolute inset-0 w-full h-full object-cover bg-slate-800 transition-all duration-700 ease-in-out ${
                  activeStep === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              />
            ))}
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
            
            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-amber-500 font-bold tracking-widest text-sm uppercase">Bước {t.steps[activeStep].id}</span>
              <h3 className="text-3xl font-serif font-bold text-white mt-2 drop-shadow-md">
                {t.steps[activeStep].name}
              </h3>
            </div>

            <div className="absolute bottom-0 left-0 h-1 bg-amber-500/20 w-full">
              <div 
                className="h-full bg-amber-500 transition-all duration-[2000ms] ease-linear"
                style={{ 
                  width: '100%', 
                  animation: 'none',
                  transformOrigin: 'left',
                }}
                key={activeStep}
              >
                <style>{`
                  @keyframes progress {
                    0% { transform: scaleX(0); }
                    100% { transform: scaleX(1); }
                  }
                  div[key="${activeStep}"] {
                    animation: progress 3s linear forwards;
                  }
                `}</style>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;