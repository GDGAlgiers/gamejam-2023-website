import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";

//import fontawesome styles
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="GDG Algiers Game Jam"
        description="GDG Algiers Game Jam official website"
        openGraph={{
          type: "website",
          locale: "ar_algiera",
          url: "https://game-jam.gdgalgiers.com/",
          siteName: "GDG Algiers GameJam",
          images: [{ url: "/images/og-image.jpg" }],
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
