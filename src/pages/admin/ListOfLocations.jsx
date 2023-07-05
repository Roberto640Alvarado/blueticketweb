import React from 'react';
import NavbarAdmin from '../../components/Navbars/NavbarAdmin';
import { useNavigate } from 'react-router-dom';

export const ListOfLocations = () => {

    const navigate = useNavigate();

    const handlSave = () => {
        navigate('/admin/create');
    }

    const handlCancel = () => {
        navigate('/admin/newlocation');
    }

    return (
        <>
            
            <div className='flex flex-col items-center p-5'>
                <h1 className=' m-5 font-bold text-xl md:text-2xl lg:text-3xl'>Lista de localidades</h1>
                <div className='border-locations-gray lg:w-[50vw] border-2 rounded-2xl w-11/12 p-2 h-auto'>
                    <table className='table-fixed w-full'>
                        <thead className='border-b-2 pb-2 md:text-lg border-b-locations-gray'>
                            <tr className='text-stone-500 text-center font-semibold m-2'>
                                <th className='p-4'>Localidad</th>
                                <th className='p-4'>Capacidad</th>
                                <th className='p-4'>Precio</th>
                            </tr>
                        </thead>
                        <tbody className='text-center md:text-lg'>
                            <tr>
                            <td className='p-2'>La Playa</td>
                            <td>70</td>
                            <td>$175</td>
                            </tr>
                            <tr>
                            <td className='p-2'>Platinum</td>
                            <td>70</td>
                            <td>$125</td>
                            </tr>
                            <tr>
                            <td className='p-2'>VIP</td>
                            <td>40</td>
                            <td>$100</td>
                            </tr>
                            <tr>
                            <td className='p-2'>La Playa</td>
                            <td>70</td>
                            <td>$175</td>
                            </tr>
                            <tr>
                            <td className='p-2'>Platinum</td>
                            <td>70</td>
                            <td>$125</td>
                            </tr>
                            <tr>
                            <td className='p-2'>VIP</td>
                            <td>40</td>
                            <td>$100</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-center py-10">
                <button onClick={handlSave} className="px-4 py-2 bg-orange rounded-md mr-4 text-black font-bold">Guardar cambios</button>
                <button onClick={handlCancel} className="px-4 py-2 bg-blue rounded-md text-white font-bold">Cancelar</button>
            </div>
            </div>
        </>
    )
}
export default ListOfLocations;