import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";

function Hero({ getDirection }) {
  const { t, i18n } = useTranslation();
  const isRTL = getDirection() === "rtl";

  return (
    <>
      <section
        dir={getDirection()}
        id="home"
        className="pt-32 pb-24 md:pt-36 md:pb-24 lg:pt-40 lg:pb-24 xl:pt-52 xl:pb-40 px-4 sm:px-6 md:px-8 lg:px-16 max-w-[85rem] 2xl:max-w-[88rem] mx-auto z-50 relative text-colors-textLightColor"
      >
        <div className="flex flex-col items-center justify-between gap-14 sm:gap-14">
          <div
            className={`max-w-xl sm:max-w-2xl xl:max-w-[800px] space-y-3 md:space-y-4 flex flex-col justify-center items-center text-center`}
          >
            <div
              className={`inline-block uppercase tracking-wider ${isRTL ? "border-r-4" : "border-l-4"} border-colors-secondTextColor`}
            >
              <p className={`text-h2Typing font-semibold isRTL mx-3`}>
                <TypeAnimation
                  key={i18n.language}
                  sequence={[
                    t("heroTagline"),
                    2000,
                    t("heroTagline2"),
                    2000,
                    t("heroTagline3"),
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </p>
            </div>
            <h1 className="text-h1 font-semibold leading-tight">
              <span className="text-colors-secondTextColor">
                {t("heroTitleHighlight")}
              </span>
              <br />
              {t("heroTitle")}
            </h1>

            <p className="text-sm lg:text-base">{t("heroDescription")}</p>

            <div className="flex items-center justify-center md:justify-start gap-2 pt-4 lg:pt-8">
              <a href="#about-us" className="button">
                {t("learnMore")}
              </a>
              <a href="#contact" className="button">
                {t("contactUs")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
