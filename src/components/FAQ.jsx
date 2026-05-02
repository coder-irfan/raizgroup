import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function FAQ({ getDirection }) {
  const isRTL = getDirection() === "rtl";
  const { t } = useTranslation();

  const faqs = [
    {
      id: "1",
      question: t("faq1_q"),
      answer: t("faq1_a"),
    },
    {
      id: "2",
      question: t("faq2_q"),
      answer: t("faq2_a"),
    },
    {
      id: "3",
      question: t("faq3_q"),
      answer: t("faq3_a"),
    },
    {
      id: "4",
      question: t("faq4_q"),
      answer: t("faq4_a"),
    },
    {
      id: "5",
      question: t("faq5_q"),
      answer: t("faq5_a"),
    },
  ];

  const [isOpen, setIsOpen] = useState(0);
  const toggleFaq = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <>
      <section
        id="faq"
        dir={getDirection()}
        className="px-4 sm:px-6 md:px-8 lg:px-16 py-14 md:py-14 lg:py-24 space-y-6 md:space-y-10 scroll-mt-20"
      >
        <div className="flex flex-col items-center text-center justify-center gap-2">
          <div
            className={`inline-block tracking-wider ${isRTL ? "border-r-4" : "border-l-4"} border-colors-secondTextColor`}
          >
            <p className="mx-4 font-medium md:text-lg lg:text-xl">
              {t("faqSubtitle")}
            </p>
          </div>
          <h2 className="text-h2 font-bold">
            {t("faqTitle")}
            <span className="text-colors-secondTextColor">
              {t("faqHighlight")}
            </span>
          </h2>
          <p className="text-sm md:text-base text-colors-textDarkGray text-center max-w-2xl mx-auto">
            {t("faqDescription")}
          </p>
        </div>
        <div className="space-y-2 lg:space-y-4">
          {faqs.map((faq, index) => {
            const isOpened = isOpen === index;
            return (
              <div
                key={faq.id}
                onClick={() => toggleFaq(index)}
                className="group relative max-w-4xl mx-auto cursor-pointer rounded-xl border border-colors-thirdBg/40 bg-colors-bg/70 backdrop-blur-md transition-all duration-300 hover:border-colors-secondTextColor/40 hover:shadow-lg"
              >
                <div className="p-3 md:p-4 lg:p-5">
                  <div className="flex items-start gap-4">
                    <motion.div
                      initial={false}
                      animate={{ rotate: isOpened ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`mt-1 text-colors-secondTextColor rounded-lg transition-colors duration-300`}
                    >
                      {isOpened ? <FaTimes /> : <FaPlus />}
                    </motion.div>

                    <h3 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpened && (
                      <motion.div
                        key="answer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        style={{ transformOrigin: "top" }}
                        className="overflow-hidden"
                      >
                        <p
                          className={`pt-4 text-[13px] md:text-base text-colors-textDarkGray leading-relaxed ${isRTL ? "border-r-2 mr-2 pr-4" : "border-l-2 ml-2 pl-4"} border-colors-thirdBg/40`}
                        >
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default FAQ;
