import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faHourglass } from '@fortawesome/free-solid-svg-icons';
import Footer from "../../components/Footer/Footer";
import { useNavigate } from 'react-router-dom';
import { MessageSuccess } from '../../utils/Alert';


export const TransferTicket = () => {
    const navigate = useNavigate();

    const handleCancelTransfer = () => {
        navigate('/user/info-pay-ticket');    
    };

    const handleTransfer = () => {
        MessageSuccess('Se ha transferido el ticket correctamente');
        //
    }


    return (
        <>
            <section className='py-26 bg-white'>
                <div className='container px-4 mx-auto'>
                    <div className='max-w-lg mx-auto py-8'>
                        <div className='text-center mb-8'>
                            <h2 className='text-3xl md:text-4xl font-extrabold mb-2'>Trasferir Ticket</h2>
                        </div>
                        <form action="">
                            <div className='mb-6'>
                                <label className='block mb-2 font-extrabold text-center text-2xl' for="">Ingrese su correo</label>
                                <input className='inline-block w-full p-4 leading-6 text-lg text-center bg-white shadow border-2 border-gray rounded' type="text"
                                    placeholder="example@gmail.com" />
                            </div>
                            <div className='mb-6'>
                                <label className='block mb-2 font-extrabold text-center text-2xl sm:text-xl' for="">Ingrese el correo del receptor</label>
                                <input className='inline-block w-full p-4 leading-6 text-lg  text-center  bg-white shadow border-2 border-gray rounded' type="text"
                                    placeholder="example@gmail.com" />
                            </div>
                            <div className='flex items-center m-5'>
                                <FontAwesomeIcon icon={faHourglass} className='h-10 m-4 mx-3' />
                                <label className='block  text-center text-xl' for="">El QR enviado al receptor solo es valido por 10 minutos</label>
                            </div>

                            <div className='text-center'>
                                <button onClick={handleTransfer} type="submit" className='px-10 py-3  bg-orange rounded-2xl
                        font-extrabold text-black capitalize
                        focus:outline-none hover:shadow-none'>
                                    Transferir
                                </button>

                                <button type="submit" className='px-10 py-3 m-5 bg-blue rounded-2xl
                        font-extrabold text-white capitalize
                        focus:outline-none hover:shadow-none' onClick={handleCancelTransfer}>
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default TransferTicket;
