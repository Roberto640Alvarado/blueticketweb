import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CardGraph = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

    const handleGraphEvent = () => {
    navigate("/admin/graph-event");

    }

  return (
    <>
      <div onClick={handleGraphEvent} className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-2/3 lg:w-1/2">
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isHovered && (
            <div className="absolute inset-0 bg-blue-800 bg-opacity-70 flex items-center justify-center backdrop-filter backdrop-blur-lg hover:cursor-pointer">
                <FontAwesomeIcon icon={faChartColumn} className="w-20 h-20" />
            </div>
          )}
          <img
            className="w-full h-48 object-cover object-center rounded-t-lg"
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

export default CardGraph;