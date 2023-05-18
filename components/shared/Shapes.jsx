import Image from "next/image";
const Shapes = () => {
  return (
    <div>
      {/* Stars */}
      <div className="absolute top-6 right-4 z-10">
        <Image src="/shapes/star.png" alt="shape" height={69} width={69} />
      </div>
      <div className="absolute top-72 right-6 z-10">
        <Image src="/shapes/star.png" alt="shape" height={69} width={69} />
      </div>
      <div className="absolute top-24 right-1/3 z-10">
        <Image src="/shapes/star.png" alt="shape" height={69} width={69} />
      </div>
      <div className="absolute top-1/3 right-1/4 z-10">
        <Image src="/shapes/star.png" alt="shape" height={69} width={69} />
      </div>
      <div className="absolute bottom-6 right-6 z-10">
        <Image src="/shapes/star.png" alt="shape" height={69} width={69} />
      </div>
      <div className="absolute bottom-5 right-48 z-10">
        <Image src="/shapes/star.png" alt="shape" height={69} width={69} />
      </div>
      <div className="absolute bottom-5 left-48 z-10">
        <Image src="/shapes/star.png" alt="shape" height={69} width={69} />
      </div>
      <div className="absolute bottom-5 left-12 z-10">
        <Image src="/shapes/star.png" alt="shape" height={69} width={69} />
      </div>
      <div className="absolute bottom-1/4 left-1/4 z-10">
        <Image src="/shapes/star.png" alt="shape" height={69} width={69} />
      </div>
      <div className="absolute bottom-1/2 left-48 z-10">
        <Image src="/shapes/star.png" alt="shape" height={69} width={69} />
      </div>
      <div className="absolute top-12 left-12 z-10">
        <Image src="/shapes/star.png" alt="shape" height={69} width={69} />
      </div>
      <div className="absolute top-1/4 left-16 z-10">
        <Image src="/shapes/star.png" alt="shape" height={69} width={69} />
      </div>

      {/* Rectangulars */}
      <div className="absolute top-24 left-1/2 z-10">
        <Image
          src="/shapes/rectangular.png"
          alt="shape"
          height={27}
          width={18}
          className="rotate-90"
        />
      </div>
      <div className="absolute top-1/2 right-1/3 z-10">
        <Image
          src="/shapes/rectangular.png"
          alt="shape"
          height={27}
          width={18}
          className="rotate-180"
        />
      </div>
      <div className="absolute top-1/2 left-12 z-10">
        <Image
          src="/shapes/rectangular.png"
          alt="shape"
          height={27}
          width={18}
          className="rotate-45"
        />
      </div>
      <div className="absolute top-2/3 left-48 z-10">
        <Image
          src="/shapes/rectangular.png"
          alt="shape"
          height={27}
          width={18}
          className="rotate-90"
        />
      </div>

      {/* Triangles */}
      <div className="absolute top-48 left-1/4 z-10">
        <Image src="/shapes/triangle.png" alt="shape" height={28} width={26} />
      </div>
      <div className="absolute top-1/2 right-1/4 z-10">
        <Image src="/shapes/triangle.png" alt="shape" height={28} width={26} />
      </div>
      <div className="absolute bottom-1/4 left-1/4 z-10">
        <Image
          src="/shapes/triangle.png"
          alt="shape"
          height={40}
          width={37}
          className="rotate-45"
        />
      </div>

      {/* Squares */}
      <div className="absolute top-1/2 left-1/4 z-10">
        <Image src="/shapes/square.png" alt="shape" height={25} width={25} />
      </div>
      <div className="absolute bottom-12 right-48 z-10">
        <Image src="/shapes/square.png" alt="shape" height={25} width={25} />
      </div>

      {/* Circles */}
      <div className="absolute bottom-1/4 right-96 z-10">
        <Image src="/shapes/circle.png" alt="shape" height={15} width={15} />
      </div>
      <div className="absolute top-64 left-48 z-10">
        <Image src="/shapes/circle.png" alt="shape" height={15} width={15} />
      </div>
      <div className="absolute top-1/2 right-96 z-10">
        <Image src="/shapes/circle.png" alt="shape" height={30} width={30} />
      </div>

      {/* Crosses */}
      <div className="absolute top-1/3 right-1/3 z-10">
        <Image src="/shapes/cross.png" alt="shape" height={15} width={15} />
      </div>
      <div className="absolute top-1/3 left-48 z-10">
        <Image src="/shapes/cross.png" alt="shape" height={8} width={8} />
      </div>
    </div>
  );
};

export default Shapes;
