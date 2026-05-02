import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaPaperPlane,
  FaPhone,
  FaSearchLocation,
  FaMailBulk,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Contact({ getDirection }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isRTL = getDirection() === "rtl";
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const message = encodeURIComponent(
      `Hello, my name is ${data.fullName}\n` +
        `Phone: ${data.phone}\n` +
        `Email: ${data.email}\n` +
        `Message: ${data.comments || "-"}`,
    );

    const whatsappURL = `https://wa.me/93799313021?text=${message}`;

    window.open(whatsappURL, "_blank");

    setIsSubmitted(true);
    reset();

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <>
      <section
        id="contact"
        dir={getDirection()}
        className="relative w-full px-4 sm:px-6 md:px-8 py-12 lg:px-16 lg:py-20 max-w-[88rem] 2xl:max-w-[90rem] mx-auto"
      >
        <div className="space-y-10 sm:space-y-10 md:space-y-12 lg:space-y-14">
          <div className="text-center space-y-2 md:space-y-3">
            <div
              className={`inline-block tracking-wider ${isRTL ? "border-r-4" : "border-l-4"} border-colors-secondTextColor`}
            >
              <p className="mx-4 font-medium md:text-lg lg:text-xl">
                {t("contactSection")}
              </p>
            </div>

            <h2 className="text-h2 font-semibold leading-tight">
              {t("contactTitle")}{" "}
              <span className="text-colors-secondTextColor">
                {t("contactHighlight")}
              </span>{" "}
              {t("contactTitleEnd")}
            </h2>

            <p className="text-sm md:text-base text-colors-textDarkGray text-center max-w-2xl mx-auto">
              {t("contactDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-8">
            <div className="max-w-[500px]">
              <div className="space-y-6 lg:space-y-10">
                <div className="space-y-2 lg:space-y-3">
                  <h2 className="font-semibold text-xl md:text-2xl lg:text-[2rem] xl:text-[2.1rem] md:leading-[1.3]">
                    {t("contactAltTitle")}
                  </h2>
                  <p className="text-sm md:text-base text-colors-textDarkGray">
                    {t("contactAltDesc")}
                  </p>
                </div>
                <div className="flex flex-col gap-6 lg:gap-8">
                  <div className="flex items-center gap-3">
                    <p className="p-3 md:p-4 bg-colors-buttonBg/70 rounded-full">
                      <FaPhone className="md:text-xl" />
                    </p>
                    <div className="">
                      <h4 className="font-medium">{t("phone")}</h4>
                      <a
                        href="tel:+93799313021"
                        className="text-sm md:text-base hover:text-colors-secondTextColor transition-colors duration-300"
                      >
                        +93799313021
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="p-3 md:p-4 bg-colors-buttonBg/70 rounded-full">
                      <FaSearchLocation className="md:text-xl" />
                    </p>
                    <div className="">
                      <h4 className="font-medium">{t("location")}</h4>
                      <p className="text-sm md:text-base">
                        {t("clientLocation")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="p-3 md:p-4 bg-colors-buttonBg/70 rounded-full">
                      <FaMailBulk className="md:text-xl" />
                    </p>
                    <div className="">
                      <h4 className="font-medium">{t("email")}</h4>
                      <a
                        href="mailto:info@raizpayman.com"
                        className="text-sm md:text-base hover:text-colors-secondTextColor transition-colors duration-300"
                      >
                        info@raizpayman.com
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 lg:gap-4 text-xl lg:text-2xl">
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
              </div>
            </div>

            <div className="max-w-4xl bg-colors-bg p-4 md:p-6 rounded-lg -order-1 lg:order-1">
              <form
                className="flex flex-col gap-4 lg:gap-5"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex items-center justify-center gap-2">
                  <div className="space-y-2 w-full sm:w-1/2">
                    <label htmlFor="fullName" className="text-sm lg:text-base">
                      {t("fullName")}
                    </label>
                    <div className="">
                      <input
                        placeholder={t("fullNamePlaceholder")}
                        id="fullName"
                        type="text"
                        className={`input ${
                          errors.fullName ? "!border-red" : ""
                        }`}
                        {...register("fullName", {
                          required: t("nameError"),
                        })}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="error">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div className="space-y-2 w-full sm:w-1/2">
                    <label htmlFor="phone" className="text-sm lg:text-base">
                      {t("phoneNumber")}
                    </label>
                    <div className="">
                      <input
                        placeholder={t("phonePlaceholder")}
                        type="tel"
                        id="phone"
                        className={`input ${errors.phone ? "!border-red" : ""}`}
                        {...register("phone", {
                          required: t("phoneError"),
                          minLength: {
                            value: 9,
                            message: t("phoneInvalid"),
                          },
                        })}
                      />
                    </div>
                    {errors.phone && (
                      <p className="error">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2 w-full">
                  <label className="text-sm lg:text-base">
                    {t("userEmail")}
                  </label>
                  <div className="">
                    <input
                      placeholder={t("emailPlaceholder")}
                      type="email"
                      autoComplete="off"
                      className={`input ${errors.email ? "!border-red" : ""}`}
                      {...register("email", {
                        required: t("emailError"),
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: t("emailInvalid"),
                        },
                      })}
                    />
                  </div>
                  {errors.email && (
                    <p className="error">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2 w-full">
                  <label htmlFor="comments" className="text-sm lg:text-base">
                    {t("comments")}
                  </label>
                  <textarea
                    placeholder={t("commentsPlaceholder")}
                    id="comments"
                    className="input h-28 lg:h-40"
                    {...register("comments")}
                  ></textarea>
                </div>

                <button type="submit" className="button justify-center">
                  {t("submit")} <FaPaperPlane />
                </button>

                {isSubmitted && (
                  <div className="bg-green-100 text-green-700 px-4 py-3 rounded-lg text-sm mb-4 text-center">
                    {t("successMessage")}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
