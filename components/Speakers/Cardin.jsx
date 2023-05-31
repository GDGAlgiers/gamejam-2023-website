import React, { useState } from 'react';

const Card = ({ speaker }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`relative w-64 bg-white border rounded-lg p-4 ${
        hovered ? 'scale-90 -translate-y-4' : 'scale-100 translate-y-0'
      } transition-transform duration-300 ease-in-out`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        <img src="/public/images/mentor_image.png" alt="{speaker.name}" className="w-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src="/public/shapes/controller1.png.png" alt="Game Controller" />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-center">
          <div className="relative">
            <img
              src="../../public/shapes/mentor_title.png"
              alt="Title Background"
              className="w-full"
            />
            <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-semibold">
              Mentor
            </h3>
          </div>
        </div>
        {hovered && (
          <div className="mt-4">
            <div className="border-b border-red-500" />
            <h3 className="mt-4 text-lg font-semibold">Anes Mez</h3>
            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deleniti debitis suscipit, placeat sed nihil minus temporibus, impedit enim ipsa velit illo accusantium reprehenderit amet mollitia sequi, perferendis ducimus neque.</p>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2">
        <img
          src="/public/shapes/controller2.png"
          alt="Reversed Game Controller"
          className={hovered ? 'opacity-50' : ''}
        />
      </div>
    </div>
  );
};

export default Card;
