import Image from "next/image";
import NavMobile from "./NavMobile";
import { useState } from "react";
import NavMobileButton from "./NavMobileButton";

const Navbar = ( navigationHandleProps ) => {
  console.log('navigation props: ',navigationHandleProps)
  
  const [showMobileNavBar, setShowMobileNavBar ] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-20 py-4 w-full">
      <div className="container hidden lg:flex justify-between items-center">
        <div className="relative w-[115px] h-[42px] lg:h-[62px] lg:w-[180px]">
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
        
      <div className="container flex lg:hidden justify-between items-center">
        
        <div className="relative w-[115px] h-[42px] lg:h-[62px] lg:w-[180px]">
          <Image src="/logos/gameJam.svg" alt="GDG Algiers GameJam" fill />
        </div>

        <NavMobileButton showMobileNavBar={showMobileNavBar} setShowMobileNavBar={setShowMobileNavBar}/>

        <div className={`lg:hidden absolute top-[100%] right-0 ${showMobileNavBar ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'} transition-all duration-300` }>
          <NavMobile {...navigationHandleProps} ></NavMobile>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
