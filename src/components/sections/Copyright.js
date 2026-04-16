import { useLanguage } from "@/src/context/LanguageContext";

const Copyright = () => {
  const { content } = useLanguage();

  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>
          &copy; {new Date().getFullYear()} {content.footer.copyrightName}
        </span>
        <span>
          {content.footer.madeWithLovePrefix}{" "}
          <span className="footer-heart" aria-hidden="true">
            &#10084;
          </span>{" "}
          {content.footer.madeWithLoveSuffix}
        </span>
        <ul>
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
    </section>
  );
};

export default Copyright;
