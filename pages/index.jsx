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
import Footer from "@/components/Footer";
import { useRef } from "react";

export default function Home() {
  const mainRef = useRef(null);
  const sectionsRef = useRef([]);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Layout mainRef={mainRef} sectionsRef={sectionsRef}>
        <SectionContainer sectionIndex={0} ref={sectionsRef}>
          <Hero />
        </SectionContainer>

        <SectionContainer sectionIndex={1} ref={sectionsRef}>
          <About />
        </SectionContainer>

        {/* <SectionContainer sectionIndex={2} ref={sectionsRef} >
          <Speakers/>
        </SectionContainer> */}

        <SectionContainer sectionIndex={2} ref={sectionsRef}>
          <Agenda />
        </SectionContainer>

        {/* <SectionContainer sectionIndex={3} ref={sectionsRef} >
          <Partners/>
        </SectionContainer> */}

        {/* <SectionContainer sectionIndex={4} ref={sectionsRef} >
          <Sponsors/>
        </SectionContainer> */}

        <SectionContainer sectionIndex={3} ref={sectionsRef}>
          <Faq />
        </SectionContainer>

        <SectionContainer sectionIndex={4} ref={sectionsRef}>
          <Contact />
          <Footer />
        </SectionContainer>
      </Layout>
    </>
  );
}
