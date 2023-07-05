import React from 'react';
import Footer from '../../components/Footer/Footer';
import SearchBox from '../../components/SearchBoxTicket';
import { Alert, MessageSuccess} from '../../utils/Alert';

export const UserManagement = () => {

    const handleCloseServer = () => {
        //Mostar alerta de confirmación
        Alert({
            message: 'Todos los procesos se cerrarán',
            messageConfirmed: 'El servidor se ha cerrado correctamente'
        });
    }

    const handleActive = () => {
        MessageSuccess('El usuario se ha activado correctamente');
    }

    const handleInactive = () => {
        MessageSuccess('El usuario se ha desactivado correctamente');
    }
    return (
        <>

            {/* <SearchBox />    aqui ocupo un componente que debe subir omar xD*/}
            <div className='flex flex-col items-center'>
                <h1 className='m-5 font-bold text-xl md:text-3xl'>Gestión de Usuarios</h1>

                <div className='m-5'>
                    <SearchBox />
                </div>

                <div className='border-locations-gray border-2 rounded-2xl w-11/12 p-2 h-auto'>
                    <table className='table-fixed w-full'>
                        <thead className='border-b-2 border-b-locations-gray'>
                            <tr className='text-stone-600  text-xs md:text-lg  lg:text-2xl text-center'>
                                <th className='p-4 font-bold'>Usuario</th>
                                <th className='p-4 font-bold'>Permisos</th>
                                <th className='p-4 font-bold'>Acciones</th>
                            </tr>
                        </thead>
                        <tbody className='text-center text-xs md:text-lg'>
                            <tr className='border-b-2 border-b-locations-gray'>
                                <td className='p-4 text-black font-semibold'>Usuario 1</td>
                                <td className=''>
                                    <button className='relative text-sm px-2 py-1 md:p-3  leading-6 font-normal  justify-center items-center  bg-locations-gray focus:outline-none shadow border-2 border-none text-black rounded-full'>
                                        <form action='#'>
                                            <select className='text-xs md:text-lg text-center items-center bg-locations-gray'>
                                                <option value="opcion1">Opción 1</option>
                                                <option value="opcion2">Opción 2</option>
                                                <option value="opcion3">Opción 3</option>
                                            </select>
                                        </form>
                                    </button>
                                </td>
                                <td className="p-4 flex flex-col md:flex-row lg:justify-center">
                                    <button onClick={handleActive} className="bg-orange text-black font-bold w-20 py-1 px-4 md:w-24 border md:mr-2 mb-1 md:mb-0 border-orange rounded-full">Activar</button>
                                    <button onClick={handleInactive} className="bg-blue text-white text-center  w-20 font-bold py-1 md:w-28  border border-blue rounded-full">Desactivar</button>
                                </td>
                            </tr>
                            <tr className='border-b-2 border-b-locations-gray'>
                                <td className='p-4 text-black font-semibold'>Usuario 2</td>
                                <td className=''>
                                    <button className='relative text-sm px-2 py-1 md:p-3  leading-6 font-normal  justify-center items-center  bg-locations-gray focus:outline-none shadow border-2 border-none text-black rounded-full'>
                                        <form action='#'>
                                            <select className='text-xs md:text-lg text-center items-center bg-locations-gray'>
                                                <option value="opcion1">Opción 1</option>
                                                <option value="opcion2">Opción 2</option>
                                                <option value="opcion3">Opción 3</option>
                                            </select>
                                        </form>
                                    </button>
                                </td>
                                <td className="p-4 flex flex-col md:flex-row lg:justify-center">
                                    <button onClick={handleActive} className="bg-orange text-black font-bold w-20 py-1 px-4 md:w-24 border md:mr-2 mb-1 md:mb-0 border-orange rounded-full">Activar</button>
                                    <button onClick={handleInactive} className="bg-blue text-white text-center  w-20 font-bold py-1 md:w-28  border border-blue rounded-full">Desactivar</button>
                                </td>
                            </tr>
                            <tr className='border-b-2 border-b-locations-gray'>
                                <td className='p-4 text-black font-semibold'>Usuario 3</td>
                                <td className=''>
                                    <button className='relative text-sm px-2 py-1 md:p-3  leading-6 font-normal  justify-center items-center  bg-locations-gray focus:outline-none shadow border-2 border-none text-black rounded-full'>
                                        <form action='#'>
                                            <select className='text-xs md:text-lg text-center items-center bg-locations-gray'>
                                                <option value="opcion1">Opción 1</option>
                                                <option value="opcion2">Opción 2</option>
                                                <option value="opcion3">Opción 3</option>
                                            </select>
                                        </form>
                                    </button>
                                </td>
                                <td className="p-4 flex flex-col md:flex-row lg:justify-center">
                                    <button onClick={handleActive} className="bg-orange text-black font-bold w-20 py-1 px-4 md:w-24 border md:mr-2 mb-1 md:mb-0 border-orange rounded-full">Activar</button>
                                    <button onClick={handleInactive} className="bg-blue text-white text-center  w-20 font-bold py-1 md:w-28  border border-blue rounded-full">Desactivar</button>
                                </td>
                            </tr>
                            <tr className='border-b-2 border-b-locations-gray'>
                                <td className='p-4 text-black font-semibold'>Usuario 4</td>
                                <td className=''>
                                    <button className='relative text-sm px-2 py-1 md:p-3  leading-6 font-normal  justify-center items-center  bg-locations-gray focus:outline-none shadow border-2 border-none text-black rounded-full'>
                                        <form action='#'>
                                            <select className='text-xs md:text-lg text-center items-center bg-locations-gray'>
                                                <option value="opcion1">Opción 1</option>
                                                <option value="opcion2">Opción 2</option>
                                                <option value="opcion3">Opción 3</option>
                                            </select>
                                        </form>
                                    </button>
                                </td>
                                <td className="p-4 flex flex-col md:flex-row lg:justify-center">
                                    <button onClick={handleActive} className="bg-orange text-black font-bold w-20 py-1 px-4 md:w-24 border md:mr-2 mb-1 md:mb-0 border-orange rounded-full">Activar</button>
                                    <button onClick={handleInactive} className="bg-blue text-white text-center  w-20 font-bold py-1 md:w-28  border border-blue rounded-full">Desactivar</button>
                                </td>
                            </tr>
                            <tr className='border-b-2 border-b-locations-gray'>
                                <td className='p-4 text-black font-semibold'>Usuario 5</td>
                                <td className=''>
                                    <button className='relative text-sm px-2 py-1 md:p-3  leading-6 font-normal  justify-center items-center  bg-locations-gray focus:outline-none shadow border-2 border-none text-black rounded-full'>
                                        <form action='#'>
                                            <select className='text-xs md:text-lg text-center items-center bg-locations-gray'>
                                                <option value="opcion1">Opción 1</option>
                                                <option value="opcion2">Opción 2</option>
                                                <option value="opcion3">Opción 3</option>
                                            </select>
                                        </form>
                                    </button>
                                </td>
                                <td className="p-4 flex flex-col md:flex-row lg:justify-center">
                                    <button onClick={handleActive} className="bg-orange text-black font-bold w-20 py-1 px-4 md:w-24 border md:mr-2 mb-1 md:mb-0 border-orange rounded-full">Activar</button>
                                    <button onClick={handleInactive} className="bg-blue text-white text-center  w-20 font-bold py-1 md:w-28  border border-blue rounded-full">Desactivar</button>
                                </td>
                            </tr>
                        </tbody>
                        <button onClick={handleCloseServer} className="bg-red-600 border-none text-white text-center mt-3 w-28 text-xs md:text-lg font-bold py-2 md:w-40  ml-[55vw] md:ml-[68vw] lg:ml-[70vw] xl:ml-[72vw] border border-blue rounded-full">Cerrar Servicios</button>
                    </table>
                </div>
                <div className="flex justify-center py-10">
                    <button className="px-4 py-2 bg-orange rounded-md mr-4 text-black font-bold">Anterior</button>
                    <button className="px-4 py-2 bg-blue rounded-md text-white font-bold">Siguiente</button>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default UserManagement;
