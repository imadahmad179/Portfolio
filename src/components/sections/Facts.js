import { useLanguage } from "@/src/context/LanguageContext";

const Facts = () => {
  const { content } = useLanguage();

  return (
    <section className="facts">
      <div className="flex-column-mobile">
        {content.facts.map((fact, index) => (
          <div
            key={`${fact.value}-${fact.accent}`}
            className={`animated-layer fade-in-right-animation ${
              index % 2 === 0 ? "fadeInLeft" : "fadeInRight"
            } wow`}
            data-wow-offset={200}
          >
            <div>
              <div>
                <h3>{fact.value}</h3>
                <p>
                  {fact.label}
                  <span>{fact.accent}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};

export default Facts;
