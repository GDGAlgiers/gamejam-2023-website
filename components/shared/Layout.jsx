import Image from "next/image";
import Navbar from "./Navbar";
import Follow from "./Follow";
import SideNav from "./SideNav";
import Shapes from "./Shapes";
const Layout = ({ mainRef, children }) => {
  return (
    <div className="relative h-screen overflow-hidden">
      <Shapes />
      {/* Background image */}
      <div className="fixed top-0 left-0 bottom-0 right-0 -z-1 bg-[url('/images/bg.png')] bg-cover bg-no-repeat bg-center"></div>

      <div className="relative h-full z-20">
        <Navbar />
        <div className="container h-full flex justify-between items-start mt-24">
          <Follow />
          <main
            ref={mainRef}
            id="main"
            className="flex-1 relative z-20 h-full overflow-y-scroll no-scrollbar lg:pt-10 2xl:pt-16"
            style={{ perspective: "1px", transformStyle: "preserve-3d" }}
          >
            {children}
          </main>
          <SideNav/>
        </div>
      </div>
    </div>
  );
};

export default Layout;
