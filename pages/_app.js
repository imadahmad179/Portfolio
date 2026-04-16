import Preloader from "@/src/components/Preloader";
import ImadHead from "@/src/ImadHead";
import { LanguageProvider } from "@/src/context/LanguageContext";
import "@/styles/globals.css";
import { Fragment } from "react";

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <LanguageProvider>
        <ImadHead />
        <Preloader />
        <Component {...pageProps} />
      </LanguageProvider>
    </Fragment>
  );
};
export default App;
