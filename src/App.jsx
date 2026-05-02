import { useEffect, Suspense, lazy } from "react";
import { useTranslation } from "react-i18next";
import { Routes, Route, Navigate, useParams } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Divider from "./components/Divider";
import Divider2 from "./components/Divider2";
import WhatsApp from "./components/WhatsApp";

const Services = lazy(() => import("./components/Services"));
const Testimonial = lazy(() => import("./components/Testimonial"));
const FAQ = lazy(() => import("./components/FAQ"));
const DoneProjects = lazy(() => import("./components/DoneProjects"));
const Contact = lazy(() => import("./components/Contact"));
const Location = lazy(() => import("./components/Location"));
const NewsLetter = lazy(() => import("./components/NewsLetter"));
const Footer = lazy(() => import("./components/Footer"));

const LanguageSync = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  useEffect(() => {
    if (!lang) return;
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    document.documentElement.setAttribute("lang", lang);
  }, [lang, i18n]);

  return null;
};

const Landing = ({ getDirection }) => (
  <>
    <LanguageSync />

    <Header getDirection={getDirection} />

    <div className="bg-hero-bg bg-cover bg-no-repeat bg-center relative">
      <Hero getDirection={getDirection} />
      <div className="absolute inset-0 bg-colors-textDarkColor/70 lg:bg-colors-textDarkColor/75" />
    </div>

    <About getDirection={getDirection} />

    <div className="bg-divider2-bg bg-cover bg-no-repeat bg-top relative">
      <Divider2 />
      <div className="absolute inset-0 bg-colors-textDarkColor/70" />
    </div>

    <Suspense
      fallback={
        <div className="flex items-center justify-center py-24">
          <div className="w-10 h-10 border-4 border-colors-secondTextColor border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <Services getDirection={getDirection} />

      <div className="bg-colors-secondBg">
        <FAQ getDirection={getDirection} />
      </div>

      <div className="bg-testimonial-bg bg-contain bg-no-repeat bg-center ">
        <Testimonial getDirection={getDirection} />
      </div>

      <div className="bg-divider-bg bg-cover bg-no-repeat bg-right relative">
        <Divider />
        <div className="absolute inset-0 bg-colors-textDarkColor/70" />
      </div>

      <DoneProjects getDirection={getDirection} />

      <div className="bg-contact-bg bg-contain bg-no-repeat bg-right-top bg-colors-secondBg">
        <Contact getDirection={getDirection} />
      </div>

      <Location />

      <div className="bg-colors-secondBg">
        <NewsLetter />
      </div>

      <div className="bg-footer-bg bg-contain md:bg-cover bg-no-repeat bg-bottom relative">
        <Footer getDirection={getDirection} />
      </div>
    </Suspense>

    <WhatsApp />
  </>
);
function App() {
  const { i18n } = useTranslation();
  const getDirection = () => {
    const rtlLanguages = ["fa", "ps"];
    return rtlLanguages.includes(i18n.language) ? "rtl" : "ltr";
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/en" />} />
      <Route path="/:lang" element={<Landing getDirection={getDirection} />} />
    </Routes>
  );
}
export default App;
