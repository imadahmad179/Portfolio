import { useLanguage } from "@/src/context/LanguageContext";

const LanguageSwitcher = ({ mobile = false }) => {
  const { language, setLanguage, content } = useLanguage();

  const options = [
    { code: "de", short: "DE", label: content.language.german },
    { code: "en", short: "EN", label: content.language.english },
  ];

  return (
    <div className={`language-switcher${mobile ? " mobile" : ""}`}>
      <span className="language-switcher-label">{content.language.label}</span>
      <div
        className="language-switcher-pill"
        role="tablist"
        aria-label={content.language.label}
      >
        {options.map((option) => (
          <button
            key={option.code}
            type="button"
            className={language === option.code ? "active" : ""}
            onClick={() => setLanguage(option.code)}
            aria-pressed={language === option.code}
          >
            <span>{mobile ? option.label : option.short}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
