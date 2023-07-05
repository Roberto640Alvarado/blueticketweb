import NavbarAdmin from '../../components/Navbars/NavbarAdmin'
import { useNavigate } from 'react-router-dom';
import React from 'react';

export const NewLocation = () => {

    const navigate = useNavigate();

    const handlePrevious = () => {
        navigate('/admin/create');
    }

    const handleFollowing = () => {
        navigate('/admin/listlocations');
    }


    return (
        <>
            
            <div className="flex justify-center items-center py-5 ">
                <h1 className="text-3xl text-white font-black bg-orange py-2 rounded-lg w-5/6 text-center"> Evento: Bad Bunny</h1>
            </div>
            <h1 className="text-center text-4xl font-bold">Crear Localidades</h1>

            <div className="max-w-lg mx-auto border border-dashed border-blue flex flex-col items-center p-5 mt-6">
                <label className="mb-2 font-bold border border-solid border-gray w-full text-center py-2" htmlFor="evento">
                    Nombre del evento:
                </label>
                <input
                    id="evento"
                    type="text"
                    placeholder="Evento..."
                    className="w-full p-2 border border-solid border-gray-400 rounded text-center border-blue"
                />
            </div>

            <div className="max-w-lg mx-auto border border-dashed border-blue flex flex-col items-center p-5 mt-6">
                <label className="mb-2 font-bold border border-solid border-gray w-full text-center py-2" htmlFor="evento">
                    Capacidad:
                </label>
                <input
                    id="capacidad"
                    type="text"
                    placeholder="Capacidad..."
                    className="w-full p-2 border border-solid border-gray-400 rounded text-center border-blue"
                />
            </div>

            <div className="max-w-lg mx-auto border border-dashed border-blue flex flex-col items-center p-5 mt-6">
                <label className="mb-2 font-bold border border-solid border-gray w-full text-center py-2" htmlFor="evento">
                    Precio:
                </label>
                <input
                    id="precio"
                    type="text"
                    placeholder="Precio..."
                    className="w-full p-2 border border-solid border-gray-400 rounded text-center border-blue"
                />
            </div>

            <div className="flex justify-center py-10">
                <button onClick={handlePrevious} className="px-4 py-2 bg-orange rounded-md mr-4 text-black font-bold">Anterior</button>
                <button onClick={handleFollowing} className="px-4 py-2 bg-blue rounded-md text-white font-bold">Siguiente</button>
            </div>


        </>
    );


};

export default NewLocation;