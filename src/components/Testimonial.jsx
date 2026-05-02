import { useRef } from "react";
import { FaUser, FaStar } from "react-icons/fa";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Testimonial({ getDirection }) {
  const { t } = useTranslation();

  const testimonial = [
    {
      id: "1",
      text: t("test1_text"),
      icon: <FaUser />,
      name: "Ahmad Khan",
      Icon: <FaStar />,
    },
    {
      id: "2",
      text: t("test2_text"),
      icon: <FaUser />,
      name: "Haji Karim",
      Icon: <FaStar />,
    },
    {
      id: "3",
      text: t("test3_text"),
      icon: <FaUser />,
      name: "Zahir Ahmad",
      Icon: <FaStar />,
    },
    {
      id: "4",
      text: t("test4_text"),
      icon: <FaUser />,
      name: "Mohammad Farid",
      Icon: <FaStar />,
    },
    {
      id: "5",
      text: t("test5_text"),
      icon: <FaUser />,
      name: "Abdul Rahman",
      Icon: <FaStar />,
    },
    {
      id: "6",
      text: t("test6_text"),
      icon: <FaUser />,
      name: "Sayed Ali",
      Icon: <FaStar />,
    },
  ];

  const isRTL = getDirection() === "rtl";
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        dir={getDirection()}
        className="px-4 py-12 sm:px-6 md:py-14 md:px-8 md:pb-24 lg:py-12 xl:py-20 lg:px-16 scroll-mt-24"
        id="testimonial"
      >
        <div className="space-y-6 lg:space-y-12">
          <div className="text-center space-y-2">
            <div
              className={`inline-block tracking-wider ${isRTL ? "border-r-4" : "border-l-4"} border-colors-secondTextColor`}
            >
              <p className="mx-4 font-medium md:text-lg lg:text-xl">
                {t("testimonialLabel")}
              </p>
            </div>
            <h2 className="text-h2 font-semibold">
              {t("testimonialTitle1")}
              <span className="text-colors-secondTextColor">
                {t("testimonialHighlight")}
              </span>
            </h2>
            <p className="text-description text-colors-textDarkGray text-center max-w-2xl mx-auto">
              {t("testimonialDescription")}
            </p>
          </div>

          <div className="relative">
            <button
              onClick={() => scroll("left")}
              className="absolute -left-2 sm:-left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-colors-buttonBg hover:bg-colors-buttonHover
              transition-colors duration-300 rounded-full p-2 lg:p-4 shadow-md"
            >
              <FaChevronLeft className="sm:text-lg lg:text-xl" />
            </button>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-3 md:gap-4 lg:gap-6 px-4 scrollbar-hide py-4"
            >
              {testimonial.map((testimonial) => (
                <div
                  className="flex-shrink-0 snap-start w-[80%] sm:w-[50%] md:w-[45%] lg:w-[30%] bg-colors-bg shadow-[0_0_0.6rem] shadow-colors-textDarkGray/10 rounded-lg py-6 px-8 lg:py-10 lg:px-10 space-y-4 lg:space-y-6"
                  key={testimonial.id}
                >
                  <p className="text-colors-textDarkGray text-sm md:text-base">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-md md:text-xl p-2 md:p-3 bg-colors-secondBg rounded-full">
                      {testimonial.icon}
                    </p>
                    <div className="space-y-1">
                      <h4 className="text-sm md:text-base font-semibold">
                        {testimonial.name}
                      </h4>
                      <span className="flex items-center gap-1 text-xs md:text-sm text-yellow-400">
                        {testimonial.Icon}
                        {testimonial.Icon}
                        {testimonial.Icon}
                        {testimonial.Icon}
                        {testimonial.Icon}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              className="absolute -right-2 sm:-right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-colors-buttonBg hover:bg-colors-buttonHover transition-colors duration-300 rounded-full p-2 md:p-4 shadow-md"
            >
              <FaChevronRight className="sm:text-lg lg:text-xl" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
