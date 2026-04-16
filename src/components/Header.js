import LanguageSwitcher from "@/src/components/LanguageSwitcher";
import { useLanguage } from "@/src/context/LanguageContext";

const Header = () => {
  const { content } = useLanguage();

  return (
    <header>
      <div className="header-inner hide-mobile">
        <div className="menu">
          <nav>
            <ul>
              <li>
                <span className="active" id="home-link">
                  {content.nav.home}
                </span>
              </li>
              <li>
                <span id="about-link">{content.nav.about}</span>
              </li>
              <li>
                <span id="portfolio-link">{content.nav.portfolio}</span>
              </li>
              <li>
                <span id="contact-link">{content.nav.contact}</span>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-utilities">
          <LanguageSwitcher />
          <div className="mail">
            <p>
              {content.nav.emailLabel} :<span> imadahmad.ia0@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
      <nav className="mobile-menu">
        <div id="menuToggle">
          <input type="checkbox" id="checkboxmenu" />
          <span />
          <span />
          <span />
          <ul className="list-unstyled" id="menu">
            <li className="menu-language-item">
              <LanguageSwitcher mobile />
            </li>
            <li>
              <a href="#home">
                <span>{content.nav.home}</span>
              </a>
            </li>
            <li>
              <a href="#my-photo">
                <span>{content.nav.about}</span>
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <span>{content.nav.portfolio}</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <span>{content.nav.contact}</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
