import { useLanguage } from "@/src/context/LanguageContext";

const skillIcons = [
  "devicon-react-plain",
  "devicon-mongodb-plain",
  "devicon-angularjs-plain",
  "devicon-tailwindcss-plain",
  "devicon-nodejs-plain",
  "fa-solid fa-shield-halved",
  "devicon-express-original",
  "devicon-postman-plain",
];

const About = () => {
  const { content } = useLanguage();

  return (
    <section className="about main-section flex-column-mobile" id="about">
      <div className="info flex-column-mobile">
        <div
          className="img-container animated-layer image-animation my-photo-container fadeInUp wow"
          data-wow-offset={200}
          id="my-photo"
        >
          <div>
            <div>
              <img
                className="my-photo"
                src="/assets/about.PNG"
                alt="Imad Ahmad portrait"
              />
            </div>
          </div>
        </div>
        <div>
          <h2>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                {content.about.firstName}
              </span>
            </span>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                {content.about.lastName}
              </span>
            </span>
          </h2>
          <div className="infos">
            {content.about.infoGroups.map((group, groupIndex) => (
              <ul key={groupIndex}>
                {group.map((item) => (
                  <li key={item.label}>
                    <span>
                      <span className="animated-layer fade-in-up-animation fadeInUp wow">
                        <span>{item.label} :</span>
                        <span>{item.value}</span>
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="skills flex-column-mobile">
        <div className="custom-title">
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation fadeInUp wow">
                {content.about.skillsTitle}
              </span>
            </span>
          </h3>
        </div>
        <div className="skills-content">
          {[0, 1, 2, 3].map((columnIndex) => (
            <div key={columnIndex}>
              {[0, 1].map((rowIndex) => {
                const skillIndex = columnIndex * 2 + rowIndex;
                const skillName = content.about.skills[skillIndex];
                const animationClass =
                  rowIndex === 0
                    ? "fade-in-down-animation fadeInLeft"
                    : "fade-in-up-animation fadeInRight";

                return (
                  <div
                    key={skillName}
                    className={`animated-layer ${animationClass} wow`}
                  >
                    <span>
                      <i className={skillIcons[skillIndex]} />
                    </span>
                    <h4>{skillName}</h4>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="resume flex-column-mobile">
        <div className="custom-title fadeInUp wow">
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation">
                {content.about.resumeTitle}
              </span>
            </span>
          </h3>
        </div>
        <div className="timeline">
          <ol className="animated-layer fade-in-animation">
            {content.about.timeline.map((item, index) => (
              <li key={`${item.title}-${item.period}`}>
                <div
                  className={`animated-layer ${
                    index % 2 === 0
                      ? "fade-in-down-animation"
                      : "fade-in-up-animation"
                  } fadeInUp wow`}
                >
                  <div className={item.type}>
                    <h4>{item.title}</h4>
                    <p>
                      <i className="fa-regular fa-clock" />
                      <span>{item.period}</span>
                    </p>
                    <p>
                      <i
                        className={
                          item.type === "education"
                            ? "fa-solid fa-building-columns"
                            : "fa-regular fa-building"
                        }
                      />
                      <span>{item.place}</span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
            <li />
          </ol>
        </div>
      </div>
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};

export default About;
