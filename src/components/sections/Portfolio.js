import { salimovSlider } from "@/src/sliderProps";
import { useLanguage } from "@/src/context/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";

const projectMedia = [
  {
    type: "slider",
    images: [
      "assets/portfolio/Brussel.png",
      "assets/portfolio/Brussel2.png",
      "assets/portfolio/Brussel3.png",
    ],
  },
  {
    type: "image",
    image: "assets/portfolio/etesting.png",
    alt: "e-Testing Service",
  },
  {
    type: "image",
    image: "assets/portfolio/travelinkmedia.png",
    alt: "Travel Ink Media",
  },
  {
    type: "image",
    image: "assets/portfolio/Meadowridge.png",
    alt: "Meadow Ridge",
  },
];

const Portfolio = () => {
  const { content } = useLanguage();

  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="portfolio"
    >
      <div className="custom-title">
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              {content.portfolio.title}
            </span>
          </span>
        </h3>
      </div>
      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {content.portfolio.items.map((item, index) => {
          const media = projectMedia[index];
          const techLabel = content.portfolio.labels[item.techLabel];
          const ctaLabel = content.portfolio[item.cta];

          return (
            <SwiperSlide key={item.title} className="single-item swiper-slide">
              <div className="main-content">
                {media.type === "slider" ? (
                  <Swiper
                    {...salimovSlider.portfolioItems}
                    className="swiper swiper-portfolio-item"
                  >
                    {media.images.map((image) => (
                      <SwiperSlide key={image} className="swiper-slide">
                        <img src={image} alt={item.title} />
                      </SwiperSlide>
                    ))}
                    <div className="swiper-pagination" />
                  </Swiper>
                ) : (
                  <img className="img-fluid" src={media.image} alt={media.alt} />
                )}
              </div>
              <div className="details">
                <h4>{item.title}</h4>
                <div>
                  <ul>
                    <li>
                      <span>
                        <i className="fa-regular fa-file-lines" />{" "}
                        {content.portfolio.labels.type} :
                      </span>
                      <span>{item.type}</span>
                    </li>
                    <li>
                      <span>
                        <i className="fa-regular fa-user" />{" "}
                        {content.portfolio.labels.project} :
                      </span>
                      <span>{item.project}</span>
                    </li>
                    <li>
                      <span>
                        <i className="fa-regular fa-hourglass" />{" "}
                        {content.portfolio.labels.duration} :
                      </span>
                      <span>{item.duration}</span>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-code-branch" /> {techLabel} :
                      </span>
                      <span>{item.techValue}</span>
                    </li>
                  </ul>
                </div>
                <a
                  href={item.href}
                  target="_blank"
                  className="custom-btn"
                  rel="noreferrer"
                >
                  <span>
                    {ctaLabel}
                    {item.cta === "preview" ? (
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                    ) : null}
                  </span>
                </a>
              </div>
            </SwiperSlide>
          );
        })}
        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};

export default Portfolio;
