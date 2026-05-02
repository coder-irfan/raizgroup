import { useEffect, useState, useRef, useMemo } from "react";
import { useTranslation } from "react-i18next";

function Divider2() {
  const { t } = useTranslation();

  const counters = useMemo(
    () => [
      {
        number: 360,
        suffix: "+",
        label: t("projectsCompleted"),
      },
      {
        number: 100,
        suffix: "%",
        label: t("customerSatisfaction"),
      },
      {
        number: 99,
        suffix: "%",
        label: t("positiveFeedback"),
      },
    ],
    [t],
  );

  const [counts, setCounts] = useState(counters.map(() => 0));
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          counters.forEach((counter, i) => {
            let start = 0;
            const end = counter.number;
            const duration = 1500;
            const increment = end / (duration / 30);

            const timer = setInterval(() => {
              start += increment;

              if (start >= end) {
                start = end;
                clearInterval(timer);
              }

              setCounts((prev) => {
                const updated = [...prev];
                updated[i] = Math.floor(start);
                return updated;
              });
            }, 30);
          });
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated, counters]);

  return (
    <section
      ref={ref}
      className="scroll-mt-44 text-colors-textLightColor relative z-10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4 py-12 sm:px-6 sm:py-16 md:px-6 md:py-20 lg:px-16 lg:py-24 xl:py-28">
        {counters.map((counter, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center">
            <p className="text-h1 md:text-h1 font-bold text-colors-secondTextColor">
              {counts[idx]}
              {counter.suffix}
            </p>

            <h3 className="md:text-h3 font-semibold text-colors-textLightColor">
              {counter.label}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Divider2;
