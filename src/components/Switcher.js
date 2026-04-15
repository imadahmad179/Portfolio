import { Fragment, useEffect, useState } from "react";
const colors = [
  { id: 1, name: "yellow" },
  { id: 2, name: "green" },
  { id: 3, name: "red" },
  { id: 4, name: "blue" },
  { id: 5, name: "orange" },
  { id: 6, name: "yellowgreen" },
  { id: 7, name: "pink" },
  { id: 8, name: "goldenrod" },
];
const Switcher = () => {
  const [color, setColor] = useState("yellow");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const linkId = "theme-skin-stylesheet";
    let link = document.getElementById(linkId);
    if (!link) {
      link = document.createElement("link");
      link.id = linkId;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
    link.href = `/css/skins/${color}.css`;
  }, [color]);

  return (
    <Fragment>
      <div
        id="switcher"
        className={toggle ? "open" : "close"}
        style={{ display: "block" }}
      >
        <div className="content-switcher">
          <h4>COLOR SWITCHER</h4>
          <ul>
            {colors.map((colorItem) => (
              <li key={colorItem.id}>
                <a
                  href="#"
                  title={colorItem.name}
                  className="color"
                  onClick={(e) => {
                    e.preventDefault();
                    setColor(colorItem.name);
                  }}
                >
                  <img
                    src={`assets/styleswitcher/${colorItem.name}.png`}
                    alt={colorItem.name}
                  />
                </a>
              </li>
            ))}
          </ul>
          <div id="hideSwitcher" onClick={() => setToggle(false)}>
            ×
          </div>
        </div>
      </div>
      <div
        id="showSwitcher"
        className={`styleSecondColor ${toggle ? "close" : "open"}`}
        onClick={() => setToggle(true)}
      >
        <i className="fa fa-cog" />
      </div>
    </Fragment>
  );
};
export default Switcher;
