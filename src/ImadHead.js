import Head from "next/head";
import { useLanguage } from "@/src/context/LanguageContext";

const ImadHead = () => {
  const { content } = useLanguage();

  return (
    <Head>
      <title>{content.meta.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Template Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    </Head>
  );
};
export default ImadHead;
