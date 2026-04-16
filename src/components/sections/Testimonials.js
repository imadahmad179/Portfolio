import { useLanguage } from "@/src/context/LanguageContext";

const Testimonials = () => {
  const { content } = useLanguage();

  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {content.testimonials.map((item, index) => (
          <div
            key={item.person}
            className="quote-container animated-layer fade-in-right-animation fadeInUp wow"
          >
            <div>
              <p>
                <span className="quote">"{` ${item.quote} `}"</span>
                <span className="person">{item.person}</span>
                <span className="job">{item.job}</span>
              </p>
              <img
                src={`assets/testimonials/testimonial-${index + 1}.jpg`}
                alt={item.person}
              />
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

export default Testimonials;
