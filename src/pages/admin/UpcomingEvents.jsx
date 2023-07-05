import React from 'react';
import SearchBoxTicket from '../../components/SearchBox/SearchBoxTicket';
import Footer from '../../components/Footer/Footer';
import CardModify from '../../components/Card/CardModify';
import { useNavigate } from 'react-router-dom';

export const UpcomingEvents = () => {

    const navigate = useNavigate();

    const handleCreateEvent = () => {
        navigate('/admin/create');
    }

    return (
        <>
            <div className='flex flex-col items-center p-5 gap-5'>
                <h1 className=' font-bold text-xl  md:text-4xl'>Eventos proximos</h1>
            <div className='flex flex-col items-center gap-5'>
                <SearchBoxTicket/>
                <button onClick={handleCreateEvent} className=' bg-orange font-bold text-black w-20 lg:w-24 lg:h-10 rounded-2xl md:text-lg h-8' >Crear</button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-8 lg:p-5'>
                <CardModify/>
                <CardModify/>
                <CardModify/>
                <CardModify/>
                <CardModify/>
                <CardModify/>
            </div>
            <div className='flex flex-row items-center gap-5 pt-3'>
                <button className=' bg-orange rounded-xl text-black font-bold text-lg w-28 h-8 lg:h-10'>Anterior</button>
                <button className='bg-blue rounded-xl text-white font-bold text-lg w-28 h-8 lg:h-10'>Siguiente</button>
            </div>
            </div>
            <Footer/>
        </>
    )
}
export default UpcomingEvents;