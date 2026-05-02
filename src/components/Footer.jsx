import { FaPhone, FaSearchLocation, FaMailBulk } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Footer({ getDirection }) {
  const { t } = useTranslation();

  return (
    <>
      <footer
        id="contact"
        dir={getDirection()}
        className="px-4 pt-10 pb-6 sm:px-6 md:pt-14 md:pb-4 md:px-8 lg:pt-14 lg:pb-6 xl:pt-16 lg:px-16 space-y-4 md:space-y-6 lg:space-y-6"
      >
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-8 lg:gap-10 pb-8">
          <div className="space-y-5 lg:space-y-5 max-w-md lg:max-w-xs flex flex-col items-start justify-start ">
            <div className="">
              <img
                src="images/logo.png"
                alt="logo"
                className="w-24 object-contain"
              />
            </div>
            <p className="text-sm lg:text-base">{t("footerDesc")}</p>
          </div>

          <div className="flex gap-16 sm:gap-28 md:gap-36 lg:gap-10 xl:gap-28">
            <div className="space-y-2 lg:space-y-5">
              <h3 className="text-h3 font-medium text-colors-textDarkGray">
                {t("company")}
              </h3>
              <ul className="space-y-2 lg:space-y-3 text-sm xl:text-base">
                <li className="">
                  <a href="#about-us" className="hover-link">
                    {t("aboutUs")}
                  </a>
                </li>
                <li className="">
                  <a href="#testimonial" className="hover-link">
                    {t("ourClients")}
                  </a>
                </li>
                <li className="">
                  <a href="#projects" className="hover-link">
                    {t("projectsLink")}
                  </a>
                </li>
                <li className="">
                  <a href="#services" className="hover-link">
                    {t("servicesLink")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2 lg:space-y-5">
              <h3 className="text-h3 font-medium text-colors-textDarkGray">
                {t("contactLink")}
              </h3>
              <ul className="space-y-2 lg:space-y-3 text-sm xl:text-base">
                <li className="">
                  <a href="#contact" className="hover-link">
                    {t("contactUsLink")}
                  </a>
                </li>
                <li className="">
                  <a href="#newsletter" className="hover-link">
                    {t("newsletter")}
                  </a>
                </li>
                <li className="">
                  <a href="#location" className="hover-link">
                    {t("locationLink")}
                  </a>
                </li>
                <li className="">
                  <a href="#contact" className="hover-link">
                    {t("information")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-12 sm:gap-28 md:gap-36 lg:gap-10 xl:gap-28">
            <div className="space-y-2 lg:space-y-5">
              <h3 className="text-h3 font-medium text-colors-textDarkGray">
                {t("support")}
              </h3>
              <ul className="space-y-2 lg:space-y-3 text-sm xl:text-base">
                <li className="">
                  <a href="#faq" className="hover-link">
                    {t("faqs")}
                  </a>
                </li>
                <li className="">
                  <a href="#contact" className="hover-link">
                    {t("helpCenter")}
                  </a>
                </li>
                <li className="">
                  <a href="#about-us" className="hover-link">
                    {t("moreInfo")}
                  </a>
                </li>
                <li className="">
                  <a href="#about-us" className="hover-link">
                    {t("privacy")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2 lg:space-y-5">
              <h3 className="text-h3 font-medium text-colors-textDarkGray">
                {t("contactInfo")}
              </h3>
              <ul className="space-y-2 lg:space-y-4 text-sm xl:text-base max-w-sm">
                <li className="flex items-center gap-2">
                  <FaPhone className="lg:text-lg text-colors-thirdBg" />
                  <a
                    href="tel:+93799313021"
                    className="text-sm md:text-base hover:text-colors-secondTextColor transition-colors duration-300"
                  >
                    +93799313021
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaMailBulk className="lg:text-lg text-colors-thirdBg" />
                  <a
                    href="mailto:info@raizpayman.com"
                    className="text-sm md:text-base hover:text-colors-secondTextColor transition-colors duration-300"
                  >
                    info@raizpayman.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaSearchLocation className="text-lg lg:text-2xl text-colors-thirdBg" />
                  {t("clientLocation")}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="images/truck.png"
            alt="truck"
            loading="lazy"
            decoding="async"
            className="absolute bottom-0 w-12 md:w-16 object-contain truck truck-1"
          />
          <img
            src="images/truck2.png"
            alt="truck"
            loading="lazy"
            decoding="async"
            className="absolute bottom-0 w-12 md:w-16 object-contain truck truck-2"
          />
          <img
            src="images/truck3.png"
            alt="truck"
            loading="lazy"
            decoding="async"
            className="absolute bottom-0 w-12 md:w-16 object-contain truck truck-3"
          />

          <hr className="border border-colors-textDarkGray/80 mt-6" />
        </div>

        <div className="flex items-center justify-between text-xs sm:text-sm md:text-base gap-2">
          <p className="">
            {t("allRights", { year: new Date().getFullYear() })}
          </p>
          <p className="">
            {t("developedBy")}
            <span className="text-colors-secondTextColor underline font-medium">
              <a
                href="https://coder-irfan-portfolio.onrender.com"
                target="_blank"
              >
                Coder Irfan
              </a>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
