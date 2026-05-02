import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTelegram,
  FaHome,
  FaBuilding,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaPhoneAlt,
} from "react-icons/fa";
import { HiInformationCircle, HiServer } from "react-icons/hi";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

function Header({ getDirection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isRTL = getDirection() === "rtl";

  useEffect(() => {
    const sections = ["home", "about-us", "services", "projects", "contact"];

    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 150;
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActiveSection(current);

      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Language Translations */
  const navigate = useNavigate();
  const [isGlobeOpen, setIsGlobeOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const languages = [
    { code: "en", label: "English", countryCode: "US" },
    { code: "fa", label: "فارسی", countryCode: "IR" },
    { code: "ps", label: "پښتو", countryCode: "AF" },
  ];

  const safeLang = i18n.language || "en";

  const currentLang =
    languages.find((lang) => lang.code === safeLang) || languages[0];

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsGlobeOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="relative font-medium">
        <div
          className={`2xl:max-w-[100rem] mx-auto px-4 sm:px-6 md:px-8 py-1 md:py-1 lg:px-16 fixed top-0 right-0 left-0 z-[60]
          transition-all duration-300
          ${
            isScrolled
              ? "backdrop-blur-md backdrop-saturate-150 shadow-sm shadow-colors-textDarkGray/10 "
              : "bg-transparent "
          }`}
        >
          <div
            className={`md:hidden fixed w-screen h-screen opacity-100 inset-0 bg-colors-bg transition-all duration-700 z-20
            ${
              isOpen
                ? "translate-x-0 pointer-events-auto"
                : "translate-x-full delay-200 pointer-events-none"
            }`}
          ></div>

          <div className="flex items-center justify-between">
            <img
              src="images/logo.png"
              alt="logo"
              className="w-12 md:w-14 lg:w-16 object-contain"
            />

            <div className="z-50">
              <nav
                className={`md:relative fixed top-0 right-0 h-full md:right-0 transition-all duration-700 pt-24 pr-6 md:pr-0 md:pt-0
                md:h-auto md:w-auto md:translate-x-0 ${
                  isOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="md:hidden absolute top-0 left-4 px-4 py-4">
                  <img src="images/logo.png" alt="logo" className="w-20" />
                </div>
                <div className="flex flex-col md:flex-row items-end gap-8">
                  <ul
                    dir={getDirection()}
                    className={`flex flex-col md:flex-row md:items-center gap-4 lg:gap-6 lg:text-lg
                    ${
                      isScrolled
                        ? "md:text-colors-textDarkColor"
                        : "md:text-colors-textLightColor"
                    }
                  ${isRTL ? "items-start" : "items-end"}`}
                  >
                    <li
                      className={`hover-link font-semibold flex justify-center items-center gap-2
                    ${activeSection === "home" ? "active-link" : ""}`}
                    >
                      <a
                        href="#home"
                        onClick={() => setIsOpen(false)}
                        className=""
                      >
                        {t("home")}
                      </a>
                      <FaHome className="md:hidden text-lg opacity-80" />
                    </li>

                    <div className="md:hidden w-screen h-[1px] -mr-6 bg-colors-textDarkColor/40"></div>

                    <li className="hidden md:flex opacity-25">|</li>
                    <li
                      className={`hover-link font-semibold flex justify-center items-center gap-2
                    ${activeSection === "about-us" ? "active-link" : ""}`}
                    >
                      <a
                        href="#about-us"
                        onClick={() => setIsOpen(false)}
                        className=""
                      >
                        {t("about")}
                      </a>
                      <HiInformationCircle className="md:hidden text-lg opacity-80" />
                    </li>

                    <div className="md:hidden w-screen h-[1px] -mr-6 bg-colors-textDarkColor/40"></div>

                    <li className="hidden md:flex opacity-25">|</li>
                    <li
                      className={`hover-link font-semibold flex justify-center items-center gap-2
                    ${activeSection === "services" ? "active-link" : ""}`}
                    >
                      <a
                        href="#services"
                        onClick={() => setIsOpen(false)}
                        className=""
                      >
                        {t("services")}
                      </a>
                      <HiServer className="md:hidden text-lg opacity-80" />
                    </li>

                    <div className="md:hidden w-screen h-[1px] -mr-6 bg-colors-textDarkColor/40"></div>

                    <li className="hidden md:flex opacity-25">|</li>
                    <li
                      className={`hover-link font-semibold flex justify-center items-center gap-2
                    ${activeSection === "projects" ? "active-link" : ""}`}
                    >
                      <a
                        href="#projects"
                        onClick={() => setIsOpen(false)}
                        className=""
                      >
                        {t("projects")}
                      </a>
                      <FaBuilding className="md:hidden text-lg opacity-80" />
                    </li>

                    <div className="md:hidden w-screen h-[1px] -mr-6 bg-colors-textDarkColor/40"></div>

                    <li className="hidden md:flex opacity-25">|</li>
                    <li
                      className={`hover-link font-semibold flex justify-center items-center gap-2
                    ${activeSection === "contact" ? "active-link" : ""}`}
                    >
                      <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className=""
                      >
                        {t("contact")}
                      </a>
                      <FaEnvelope className="md:hidden text-lg opacity-80" />
                    </li>

                    <div className="md:hidden w-screen h-[1px] -mr-6 bg-colors-textDarkColor/40"></div>
                  </ul>
                  <div className="md:hidden text-sm z-10 ">
                    <a
                      onClick={() => setIsOpen(false)}
                      href="#contact"
                      className="button"
                    >
                      {t("contactUs")}
                      <FaPhoneAlt />
                    </a>
                  </div>

                  <div className="md:hidden flex flex-wrap justify-center items-center gap-2 lg:gap-4 text-xl md:text-2xl xl:text-3xl ">
                    <a
                      href="https://www.instagram.com/"
                      className="media-link"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://www.youtube.com/"
                      className="media-link"
                      target="_blank"
                    >
                      <FaYoutube />
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      className="media-link"
                      target="_blank"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="https://telegram.com/"
                      className="media-link"
                      target="_blank"
                    >
                      <FaTelegram />
                    </a>
                  </div>
                </div>

                {isOpen && (
                  <div
                    className="absolute top-4 right-5 sm:right-6 text-[1.4rem] md:hidden border border-colors-buttonBg rounded-md p-1"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaTimes
                      className="cursor-pointer text-colors-buttonBg"
                      aria-label="Close menu"
                    />
                  </div>
                )}
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative" ref={dropdownRef}>
                <button
                  className={`flex items-center gap-2 mr-12 md:mr-0 cursor-pointer hover:text-colors-secondTextColor transition-all duration-300 uppercase ${
                    isScrolled
                      ? "text-colors-textDarkColor"
                      : "text-colors-textLightColor"
                  }`}
                  onClick={() => setIsGlobeOpen(!isGlobeOpen)}
                  aria-expanded={isGlobeOpen}
                  aria-label="Change language"
                >
                  <ReactCountryFlag
                    countryCode={currentLang?.countryCode || "US"}
                    svg
                    className="text-2xl"
                  />
                  <span className="">{currentLang.code}</span>
                </button>

                {isGlobeOpen && (
                  <div
                    className="absolute right-0 mt-5 mr-4 md:mr-0 w-36 bg-colors-bg rounded-md shadow-[0_0_0.3rem] shadow-colors-textDarkGray z-10 p-2
                    text-sm md:text-base"
                  >
                    <ul className="">
                      {languages.map((lang) => (
                        <li
                          className="px-3 py-2 hover:bg-colors-buttonHover/50 hover:rounded-md cursor-pointer flex items-center gap-3 transition-all duration-200"
                          key={lang.code}
                          onClick={() => {
                            i18n.changeLanguage(lang.code);
                            navigate(`/${lang.code}`);
                            setIsGlobeOpen(false);
                          }}
                        >
                          <ReactCountryFlag
                            countryCode={lang?.countryCode || "US"}
                            svg
                            className="text-xl"
                          />
                          <span className="">{lang.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="hidden lg:flex items-center gap-2">
                <a href="#contact" className="button">
                  {t("contactUs")}
                  <FaPhoneAlt />
                </a>
              </div>
            </div>

            {!isOpen && (
              <div
                className="absolute top-4 right-5 sm:right-6 text-[1.4rem] md:hidden border border-colors-buttonBg rounded-md p-1"
                onClick={() => setIsOpen(true)}
              >
                <FaBars
                  aria-label="Open menu"
                  className="cursor-pointer text-colors-buttonBg"
                />
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
