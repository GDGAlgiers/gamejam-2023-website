import Link from "next/link";
import { useRouter } from "next/router";
import navItems from "@/data/nav";
const SideNav = () => {
  
  const router = useRouter();
  
  return (
    <div className="hidden lg:flex h-full flex-col justify-center z-[9999] ">
      <nav className="flex flex-col mb-10">
        {navItems.map((item, idx) => (
          <div
            key={idx}
            className={`py-2 border-r-2 ${
              router.asPath == item.redirectTo
                ? "border-white"
                : "border-gray-700"
            } transition-all duration-700`}
          >
            <Link href={item.redirectTo}>
              <p
                className={`${
                  router.asPath == item.redirectTo
                    ? "font-extrabold text-white"
                    : "font-medium text-gray-400"
                } text-xl text-right pr-4`}
              >
                {item.name}
              </p>
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default SideNav;
