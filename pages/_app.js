import Preloader from "@/src/components/Preloader";
import Switcher from "@/src/components/Switcher";
import ImadHead from "@/src/ImadHead";
import "@/styles/globals.css";
import { Fragment } from "react";

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <ImadHead />
      <Switcher />
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
