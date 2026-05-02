import { useTranslation } from "react-i18next";

function About({ getDirection }) {
  const { t } = useTranslation();
  const isRTL = getDirection() === "rtl";

  return (
    <>
      <section
        id="about-us"
        dir={getDirection()}
        className="py-14 md:py-20 xl:py-28 px-4 md:px-6 lg:px-16"
      >
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 bg-colors-secondBg py-10 px-6 md:p-10 lg:p-10 xl:p-12
          rounded-2xl relative"
        >
          <img
            src="images/hat.webp"
            alt="hat"
            loading="lazy"
            decoding="async"
            className="absolute -top-8 w-20 left-0 md:w-24 md:-top-12 lg:-top-20 xl:-top-16 lg:left-6 lg:w-32"
          />
          <div
            className={`max-w-[500px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-xl mx-auto space-y-4 lg:space-y-8 text-center ${isRTL ? "md:text-right" : "md:text-left"}`}
          >
            <div className="space-y-2">
              <div
                className={`inline-block tracking-wider ${isRTL ? "border-r-4" : "border-l-4"} border-colors-secondTextColor`}
              >
                <p className="mx-4 font-medium md:text-lg lg:text-xl">
                  {t("aboutTag")}
                </p>
              </div>
              <h2 className="font-semibold text-2xl md:text-3xl lg:text-[2.4rem] xl:text-[2.7rem] md:leading-[1.3]">
                {t("aboutTitle")}
              </h2>
            </div>

            <p
              className={`text-colors-textDarkGray text-description ${isRTL ? "md:pr-0" : "md:pr-10"}`}
            >
              {t("aboutDescription")}
            </p>

            <div className="lg:pt-4 flex items-center justify-center md:justify-start">
              <a href="#contact">
                <button className="button">{t("requestQuote")}</button>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between gap-x-4 md:gap-x-6 xl:gap-x-8">
            <img
              src="images/construction.webp"
              alt="man hodling stuff"
              loading="lazy"
              decoding="async"
              className="rounded-md w-[500px] h-72 sm:h-[550px] xl:h-[500px] lg:w-[700px] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
