import Image from "next/image";
import NavMobile from "./NavMobile";
const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-20 py-4 w-full">
      <div className="container flex justify-between items-center">
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

        <div className="flex relative flex-col lg:hidden">
          <div className="flex flex-col cursor-pointer gap-2 lg:hidden">
            <div className="h-[3px] w-9 bg-gray-700"></div>
            <div className="h-[3px] w-9 bg-gray-700"></div>
            <div className="h-[3px] w-9 bg-gray-700"></div>
          </div>
          {/* <div className="lg:hidden absolute top-2 right-0">
            <NavMobile></NavMobile>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
