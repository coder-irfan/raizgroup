import { useTranslation } from "react-i18next";

function DoneProjects({ getDirection }) {
  const isRTL = getDirection() === "rtl";
  const { t } = useTranslation();

  const projects = [
    {
      id: "1",
      number: "01",
      title: t("project1Title"),
      description: t("project1Desc"),
      image: "images/download (5) (2).webp",
    },
    {
      id: "2",
      number: "02",
      title: t("project2Title"),
      description: t("project2Desc"),
      image: "images/undefined.webp",
    },
    {
      id: "3",
      number: "03",
      title: t("project3Title"),
      description: t("project3Desc"),
      image: "images/download (7).webp",
    },
    {
      id: "4",
      number: "04",
      title: t("project4Title"),
      description: t("project4Desc"),
      image: "images/download (6) (1).webp",
    },
    {
      id: "5",
      number: "05",
      title: t("project5Title"),
      description: t("project5Desc"),
      image: "images/download (5) (1).webp",
    },
    {
      id: "6",
      number: "06",
      title: t("project6Title"),
      description: t("project6Desc"),
      image: "images/latest-project__item-4.webp",
    },
  ];

  return (
    <section
      dir={getDirection()}
      id="projects"
      className="px-6 py-16 md:px-8 lg:px-16 lg:py-24 space-y-12"
    >
      <div className="text-center space-y-3 md:space-y-4">
        <div
          className={`inline-block tracking-wider ${isRTL ? "border-r-4" : "border-l-4"} border-colors-secondTextColor`}
        >
          <p className="mx-4 font-medium md:text-lg lg:text-xl">
            {t("projectsSection")}
          </p>
        </div>

        <h2 className="text-h2 font-semibold leading-tight">
          {t("projectsTitle")}{" "}
          <span className="text-colors-secondTextColor">
            {t("projectsHighlight")}
          </span>
        </h2>

        <p className="text-sm md:text-base text-colors-textDarkGray max-w-2xl mx-auto">
          {t("projectsDescription")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group border border-colors-textDarkGray/20 rounded-xl overflow-hidden bg-colors-bg shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <span className="absolute top-3 left-3 bg-colors-textDarkGray/80 text-colors-textLightColor text-xs px-3 py-1 rounded-full">
                {t("projectCount")} {project.number}
              </span>
            </div>

            <div className="p-6 space-y-3">
              <h3 className="text-lg md:text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-sm text-colors-textDarkGray line-clamp-3">
                {project.description}
              </p>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs lg:text-sm text-colors-textDarkGray/70">
                  {t("completedProject")}
                </span>

                <a href="#contact">
                  <button className="text-sm font-medium text-colors-secondTextColor hover:underline">
                    {t("contactUs")} →
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DoneProjects;
