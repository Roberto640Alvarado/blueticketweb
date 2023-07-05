import React from 'react';
import { useNavigate } from 'react-router-dom';

export const CardModify = () => {
  const navigate = useNavigate();

  const handleEditEvent = () => {
    navigate('/admin/edit-event');
  };

  return (
    <div className='bg-locations-gray shadow-lg rounded-xl overflow-hidden p-5 h-auto'>
      <div className="rounded-t-3xl overflow-hidden h-auto w-full">
        <img className="w-full h-72" src="https://i.pinimg.com/originals/1f/81/88/1f818876783092801d6db8ecc3d46688.jpg" alt="Artista" />
        <div className="bg-blue h-10">
          <h2 className="text-white font-bold text-2xl text-center">Esteman</h2>
        </div>
      </div>
      <div className='flex flex-row items-center gap-5 pt-3'>
        <button onClick={handleEditEvent} className='bg-orange rounded-xl text-black font-bold text-lg w-28'>Modificar</button>
        <button className='bg-blue rounded-xl text-white font-bold text-lg w-28'>Desactivar</button>
      </div>
    </div>
  );
};

export default CardModify;
