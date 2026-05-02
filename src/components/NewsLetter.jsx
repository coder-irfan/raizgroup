import { useState } from "react";
import { useTranslation } from "react-i18next";

function NewsLetter() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleWhatsApp = () => {
    if (!email) return;

    const message = encodeURIComponent(
      `Hello, I would like to receive updates from CLIENTNAME.\nEmail: ${email}`,
    );

    const phoneNumber = "93799313021";
    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(url, "_blank");
    setEmail("");
  };

  return (
    <>
      <section className="px-4 py-10 sm:px-6 md:py-12 md:px-8 lg:py-16 xl:py-16 lg:px-16">
        <div className="bg-colors-thirdBg px-4 py-6 lg:py-10 xl:py-16 rounded-lg relative overflow-hidden">
          <img
            src="images/line1.webp"
            alt="line"
            loading="lazy"
            decoding="async"
            className="absolute top-0 left-0 w-20 sm:w-40 lg:w-60 xl:w-auto opacity-60"
          />
          <img
            src="images/line2.webp"
            alt="line"
            loading="lazy"
            decoding="async"
            className="absolute bottom-0 right-0 w-20 sm:w-40 lg:w-60 xl:w-auto opacity-60"
          />
          <div className="text-center space-y-6 sm:space-y-8 md:space-y-10 text-colors-textLightColor">
            <div className="">
              <h2 className="text-h2 font-semibold font-jost">
                {t("newsletterTitle")}
              </h2>
              <p className="text-sm md:text-base text-colors-textLightColor/90 text-center max-w-2xl mx-auto">
                {t("newsletterDesc")}
              </p>
            </div>

            <div className="relative max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("newsletterPlaceholder")}
                className="w-full px-6 py-3 md:py-3 outline-none rounded-full text-colors-textDarkGray text-[12px]
                md:text-base"
              />

              <button
                onClick={handleWhatsApp}
                className="px-6 md:px-7 py-2 md:py-2.5 text-sm md:text-base font-medium rounded-full 
                bg-colors-buttonBg hover:bg-colors-buttonHover transition-colors duration-300 text-colors-textDarkColor absolute top-1/2 right-1 -translate-y-1/2"
              >
                {t("newsletterSend")}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsLetter;
