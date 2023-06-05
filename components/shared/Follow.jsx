import Image from "next/image";
const Follow = () => {
  return (
    <div className="hidden lg:flex flex-col justify-center items-start h-full -ml-20 z-[9999]">
      <div className="flex items-center justify-start gap-4 text-xl font-extrabold text-white rotate-90 mb-10">
        <h3>Follow us</h3>
        <div>
          <Image
            src="/logos/instagram.png"
            alt="GDG Algiers' Instagram"
            height={20}
            width={20}
          />
        </div>
        <div>
          <Image
            src="/logos/twitter.png"
            alt="GDG Algiers' Instagram"
            height={20}
            width={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Follow;
