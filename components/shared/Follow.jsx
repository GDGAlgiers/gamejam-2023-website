import Image from "next/image";
import Link from 'next/link';

const Follow = () => {

  return (
    <div className="hidden lg:flex flex-col justify-center items-center h-full -ml-20 z-[9999] pb-24">
      <div className="flex items-center justify-start gap-4 text-xl font-extrabold text-white rotate-90 mb-10">

        <h3>Follow us</h3>
        
        <div>
          <Link href="https://www.instagram.com/gdg_algiers">
            <Image
              src="/logos/instagram.png"
              alt="GDG Algiers' Instagram"
              height={20}
              width={20}
            />
          </Link>
        </div>
        
        <div>
          <Link href="https://twitter.com/GDG_Algiers">
            <Image
              src="/logos/twitter.png"
              alt="GDG Algiers' Instagram"
              height={20}
              width={20}
            />
          </Link>
        </div>
      
      </div>
    </div>
  );
};

export default Follow;
