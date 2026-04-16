import { useLanguage } from "@/src/context/LanguageContext";

const Contact = () => {
  const { content } = useLanguage();

  return (
    <section className="contact main-section flex-column-mobile" id="contact">
      <div className="custom-title">
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              {content.contact.title}
            </span>
          </span>
        </h3>
      </div>
      <div className="boxes">
        <div>
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-phone" />
            <p>
              <span className="small-text">{content.contact.phoneLabel}</span>
              {content.contact.phone}
            </p>
          </div>
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-location-dot" />
            <p>
              <span className="small-text">{content.contact.addressLabel}</span>
              {content.contact.address}
            </p>
          </div>
        </div>
        <div>
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-envelope" />
            <p>
              <span className="small-text">{content.contact.emailLabel}</span>
              {content.contact.email}
            </p>
          </div>
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-share-nodes" />
            <span className="small-text">{content.contact.followLabel}</span>
            <ul className="social">
              <li>
                <a
                  href="https://www.linkedin.com/in/imad-ahmad-/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.xing.com/profile/Imad_Ahmad09793"
                  aria-label="Xing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-xing" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/imadahmad179"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github" />
                </a>
              </li>
            </ul>
          </div>
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

export default Contact;
