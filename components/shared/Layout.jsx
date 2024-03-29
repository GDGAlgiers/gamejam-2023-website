import Navbar from "./Navbar";
import Follow from "./Follow";
import SideNav from "./SideNav";
import Shapes from "./Shapes";
import { useEffect, useRef, useState } from "react";
const Layout = ({ mainRef, sectionsRef, children }) => {
  const [navItems, setNavItems] = useState(require("@/data/nav").default);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const observerRef = useRef(null);

  const disconnectObserver = () => {
    if (observerRef.current) observerRef.current.disconnect();
    else return;
  };

  const observeSections = () => {
    sectionsRef.current.forEach((section) => {
      observerRef.current.observe(section);
    });
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetIndex = sectionsRef.current.indexOf(entry.target);

            if (targetIndex < 0) return;
            if (targetIndex === currentSectionIndex) return;

            setCurrentSectionIndex(targetIndex);

            return setNavItems((prev) => {
              return prev.map((item, index) => {
                return { ...item, isActive: index === targetIndex };
              });
            });
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    //observe the sections
    observeSections();

    return () => observerRef.current.disconnect();
  }, [sectionsRef, navItems, currentSectionIndex]);

  return (
    <div className="relative h-screen md:pt-6 pt-24 overflow-hidden">
      <Shapes />
    
      {/* Background image */}
      <div className="fixed top-0 left-0 bottom-0 right-0 -z-1 bg-[url('/images/bg.png')] bg-cover bg-no-repeat bg-center"></div>

      <div className="relative z-20 h-full">
        <Navbar />

        <div className="container h-full flex justify-between items-start mt-4 md:mt-16 xl:mt-12 2xl:mt-24">
          <Follow />

          <main
            ref={mainRef}
            id="main"
            className="flex-1 relative lg:absolute lg:left-1/2 lg:-translate-x-1/2 z-0 lg:z-20 h-full overflow-y-scroll overflow-x-hidden no-scrollbar  2xl:pt-4"
            style={{ perspective: "1px", transformStyle: "preserve-3d" }}
          >
            {children}
          </main>

          <SideNav
            sectionsRef={sectionsRef}
            navItems={navItems}
            observeSections={observeSections}
            setCurrentSectionIndex={setCurrentSectionIndex}
            disconnectObserver={disconnectObserver}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
