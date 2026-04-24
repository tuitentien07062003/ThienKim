import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { mockProducts } from "../../api/product";
import { useTranslation } from 'react-i18next';

const ProductStorytelling = () => {
  const containerRef = useRef(null);
  const { t } = useTranslation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

const opacity1 = useTransform(
  scrollYProgress,
  [0, 0.1, 0.3, 0.4],
  [0, 1, 1, 0]
);

const opacity2 = useTransform(
  scrollYProgress,
  [0.3, 0.4, 0.6, 0.7],
  [0, 1, 1, 0]
);

const opacity3 = useTransform(
  scrollYProgress,
  [0.6, 0.7, 0.9, 1],
  [0, 1, 1, 1]
);

  const textY1 = useTransform(scrollYProgress, [0, 0.3], [80, 0]);
  const textY2 = useTransform(scrollYProgress, [0.3, 0.6], [80, 0]);
  const textY3 = useTransform(scrollYProgress, [0.6, 0.9], [80, 0]);

  const imgScale1 = useTransform(scrollYProgress, [0, 0.25], [1.2, 1]);
  const imgScale2 = useTransform(scrollYProgress, [0.3, 0.6], [1.2, 1]);
  const imgScale3 = useTransform(scrollYProgress, [0.6, 0.9], [1.2, 1]);

  const imgY1 = useTransform(scrollYProgress, [0, 0.33], [100, 0]);
  const imgY2 = useTransform(scrollYProgress, [0.33, 0.66], [100, 0]);
  const imgY3 = useTransform(scrollYProgress, [0.66, 1], [100, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[500vh] bg-slate-950"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        <motion.div
          style={{ opacity: opacity1 }}
          className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center px-6 lg:px-24 gap-12"
        >
          <motion.div
            style={{ y: textY1 }}
            className="lg:w-1/2 space-y-6 text-white"
          >
            <span className="text-amber-500 tracking-widest uppercase">
              {t('storytelling.step1.type')}
            </span>
            <h2 className="text-5xl lg:text-7xl font-serif font-bold">
              {t('storytelling.step1.title')}
            </h2>
            <p className="text-slate-400 max-w-md">
              {t('storytelling.step1.desc')}
            </p>
          </motion.div>

          <motion.img
            src={mockProducts["ao-thun"][0].img}
            alt="Áo thun"
            style={{ scale: imgScale1, y: imgY1 }}
            className="lg:w-1/2 rounded-2xl shadow-2xl max-h-[70vh] object-cover"
          />
        </motion.div>

        <motion.div
          style={{ opacity: opacity2 }}
          className="absolute inset-0 flex flex-col lg:flex-row-reverse items-center justify-center px-6 lg:px-24 gap-12"
        >
          <motion.div
            style={{ y: textY2 }}
            className="lg:w-1/2 space-y-6 text-white text-right lg:text-left"
          >
            <span className="text-amber-500 tracking-widest uppercase">
              {t('storytelling.step2.type')}
            </span>
            <h2 className="text-5xl lg:text-7xl font-serif font-bold">
              {t('storytelling.step2.title')}
            </h2>
            <p className="text-slate-400 max-w-md ml-auto lg:ml-0">
              {t('storytelling.step2.desc')}
            </p>
          </motion.div>

          <motion.img
            src={mockProducts["ao-khoac"][0].img}
            alt="Áo khoác"
            style={{ scale: imgScale2, y: imgY2 }}
            className="lg:w-1/2 rounded-2xl shadow-2xl max-h-[70vh] object-cover"
          />
        </motion.div>

        <motion.div
          style={{ opacity: opacity3 }}
          className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center px-6 lg:px-24 gap-12"
        >
          <motion.div
            style={{ y: textY3 }}
            className="lg:w-1/2 space-y-6 text-white"
          >
            <span className="text-amber-500 tracking-widest uppercase">
              {t('storytelling.step3.type')}
            </span>
            <h2 className="text-5xl lg:text-7xl font-serif font-bold">
              {t('storytelling.step3.title')}
            </h2>
            <p className="text-slate-400 max-w-md">
              {t('storytelling.step3.desc')}
            </p>
          </motion.div>

          <motion.img
            src={mockProducts["ao-tre-em"][0].img}
            alt="Đồ trẻ em"
            style={{ scale: imgScale3, y: imgY3 }}
            className="lg:w-1/2 rounded-2xl shadow-2xl max-h-[70vh] object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default ProductStorytelling;