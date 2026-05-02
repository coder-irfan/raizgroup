import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/animations";
import { useTranslation } from "react-i18next";

function Services({ getDirection }) {
  const isRTL = getDirection() === "rtl";
  const { t } = useTranslation();

  const whyUs = [
    {
      id: "1",
      number: 1,
      title: t("service1_title"),
      description: t("service1_desc"),
      image: "images/Golden Balloon Dog Statue for office.webp",
    },
    {
      id: "2",
      number: 2,
      title: t("service2_title"),
      description: t("service2_desc"),
      image: "images/المخططات التنفيذيه.webp",
    },
    {
      id: "3",
      number: 3,
      title: t("service3_title"),
      description: t("service3_desc"),
      image: "images/logistics.webp",
    },
    {
      id: "4",
      number: 4,
      title: t("service4_title"),
      description: t("service4_desc"),
      image: "images/download (5) (1).webp",
    },
    {
      id: "5",
      number: 5,
      title: t("service5_title"),
      description: t("service5_desc"),
      image:
        "images/Como garantir controle e qualidade em obras_ Dicas essenciais.webp",
    },
    {
      id: "6",
      number: 6,
      title: t("service6_title"),
      description: t("service6_desc"),
      image: "images/latest-project__item-4.webp",
    },
  ];

  return (
    <>
      <section
        id="services"
        dir={getDirection()}
        className="px-6 py-16 sm:px-6 md:py-14 md:px-8 lg:py-20 xl:py-24 lg:px-24"
      >
        <div className="space-y-6 lg:space-y-10">
          <div className="text-center space-y-2 md:space-y-3">
            <div
              className={`inline-block tracking-wider ${isRTL ? "border-r-4" : "border-l-4"} border-colors-secondTextColor`}
            >
              <p className="mx-4 font-medium md:text-lg lg:text-xl">
                {t("servicesLabel")}
              </p>
            </div>
            <h2 className="text-h2 font-semibold leading-tight">
              {t("servicesTitle")}
              <span className="text-colors-secondTextColor">
                {t("servicesName")}
              </span>
            </h2>
            <p className="text-sm md:text-base text-colors-textDarkGray text-center max-w-2xl mx-auto">
              {t("servicesDescription")}
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {whyUs.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-xl shadow-lg bg-colors-bg flex flex-col h-full border border-colors-textDarkGray/20 will-change-transform"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1 space-y-2 relative">
                  <span className="absolute -top-8 right-4 text-6xl font-bold text-colors-secondTextColor/80">
                    0{index + 1}
                  </span>

                  <h3 className="text-lg md:text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-base text-colors-textDarkGray leading-relaxed flex-1">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-2 md:pt-4">
                    <a href="#projects">
                      <button className="text-sm font-semibold text-colors-secondTextColor hover:underline">
                        {t("viewMore")}
                      </button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Services;
