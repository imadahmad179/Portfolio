import { useLanguage } from "@/src/context/LanguageContext";

const Home = () => {
  const { content, language } = useLanguage();

  return (
    <section className="home image" id="home">
      <div>
        <div className="position-relative home-copy">
          <h1>
            <span>
              <span className="animated-layer">
                {content.home.greeting}
                <span>!</span>
              </span>
            </span>
            <span className="position-relative">
              <span className="animated-layer">{content.home.introLead}</span>
              {language === "en" ? (
                <span className="intro animated-layer animated fadeInUp">
                  {content.home.role}
                </span>
              ) : null}
            </span>
            <span>
              <span className="animated-layer">{content.home.name}</span>
            </span>
          </h1>
        </div>
      </div>
      <span className="animated-layer animated-btn cta" id="cta">
        <span></span>
      </span>
    </section>
  );
};

export default Home;
