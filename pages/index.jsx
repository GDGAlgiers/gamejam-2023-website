import Head from "next/head";
import Layout from "@/components/shared/Layout";
import SectionContainer from "@/components/shared/SectionContainer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Speakers from "@/components/Speakers";
import Agenda from "@/components/Agenda";
import Partners from "@/components/Partners";
import Sponsors from "@/components/Sponsors";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import { useEffect, useRef } from "react";

export default function Home() {
  const mainRef = useRef(null);
  const handleScroll = (e) => {
    if (mainRef.current) {
      mainRef.current.scrollTop += e.deltaY;
    }
  };
  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Layout mainRef={mainRef}>
        <SectionContainer>
          <Hero />
        </SectionContainer>

        <SectionContainer>
          <About />
        </SectionContainer>

        <SectionContainer>
          <Speakers />
        </SectionContainer>

        <SectionContainer>
          <Agenda />
        </SectionContainer>

        <SectionContainer>
          <Partners />
        </SectionContainer>

        <SectionContainer>
          <Sponsors />
        </SectionContainer>

        <SectionContainer>
          <Faq />
        </SectionContainer>

        <SectionContainer>
          <Contact />
        </SectionContainer>
      </Layout>
    </>
  );
}
