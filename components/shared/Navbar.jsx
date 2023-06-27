import Image from "next/image";
import NavMobile from "./NavMobile";
import { useState } from "react";
import NavMobileButton from "./NavMobileButton";

const Navbar = (navigationHandleProps) => {
  const [showMobileNavBar, setShowMobileNavBar] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-20 py-4 w-full">
      <div className="container hidden lg:flex justify-between items-center">
        <div className="relative w-[115px] h-[42px] lg:h-[55px] lg:w-[180px]">
          <Image src="/logos/gameJam.svg" alt="GDG Algiers GameJam" fill />
        </div>

        <div className="hidden lg:flex">
          <Image
            src="/logos/GDGAlgiers.png"
            alt="GDG Algiers GameJam"
            height={28}
            width={200}
          />
        </div>
      </div>

      <div className="container z-[99999999] flex lg:hidden justify-between items-center">
        <div className="relative w-[115px] z-[999999] h-[42px] lg:h-[55px] lg:w-[180px]">
          <Image src="/logos/gameJam.svg" alt="GDG Algiers GameJam" fill />
        </div>

        <NavMobileButton
          showMobileNavBar={showMobileNavBar}
          setShowMobileNavBar={setShowMobileNavBar}
        />

        <div
          className={`lg:hidden absolute z-[9999] top-[0%] right-0 ${
            showMobileNavBar
              ? "opacity-100 max-h-full"
              : "opacity-0 hidden max-h-0"
          } transition-all duration-300`}
        >
          <NavMobile></NavMobile>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
