import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";

//import fontawesome styles
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="GDG Algiers GameJam"
        description="GDG Algiers GameJam..."
        openGraph={{
          type: "website",
          locale: "ar_algiera",
          url: "https://www.gameJam.gdgalgiers.com/",
          siteName: "GDG Algiers GameJam",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
