import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const CardMyTicket = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleCardTicket = () => {
    navigate('/user/info-pay-ticket');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-9/12 md:w-2/3 lg:w-full"onClick={handleCardTicket}>
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isHovered && (
            <div className="absolute inset-0 bg-blue-800 bg-opacity-70 flex items-center justify-center backdrop-filter backdrop-blur-lg hover:cursor-pointer">
              <h2 className="text-white font-bold text-2xl">Esteman</h2>
            </div>
          )}
          <img
            className="w-full h-72 object-cover object-center rounded-t-lg"
            src="https://i.pinimg.com/originals/1f/81/88/1f818876783092801d6db8ecc3d46688.jpg"
            alt="Artista"
          />
        </div>
        <div className="bg-blue h-10">
          <h2 className="text-white font-bold text-2xl text-center">Ver más</h2>
        </div>
      </div>
    </>
  );
};

export default CardMyTicket;