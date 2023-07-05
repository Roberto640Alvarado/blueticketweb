import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarUser from '../../components/Navbars/NavbarUser';
import Footer from '../../components/Footer/Footer';
import CardTicket from '../../components/Card/CardTicket';
import { useParams } from 'react-router-dom';
import context from '../../context/UserContex';
import EventService from '../../services/EventServices';

export const PaymentInfo = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        getInfo();
    }, []);
    const getInfo = async() => {
        let token = context.getToken();
        let res = await EventService.gotOneEventAuth(token,id);
                console.log(res);
                if (!res.error) {
                let data = res;
                console.log(data);
                setEvent(data);
            }
    }
    if (!event) {
        return <div>Cargando...</div>;
    }
    console.log(event);
    const handlePay = () => {
        navigate(`/user/pay/${id}`);
    }
    return (
        <div>
            <div className='m-auto mt-10 mb-10 w-11/12 lg:w-3/6 sm:w-9/12 h-auto bg-card-gray rounded-3xl'>
                <div className='flex flex-col items-center sm:gap-5'>
                    <h1 className='font-bold sm:text-2xl lg:text-3xl text-center pt-5'>Información de la compra</h1>
                    <div className='pt-4'>
                            <CardTicket
                                key={event.id}
                                isMainView={true}
                                title={event.title}
                                image1={event.image1}
                                />
                    </div>
                    <div className='bg-white h-auto w-11/12 sm:w-9/12 m-5 rounded-2xl'>
                        <div className="flex justify-between items-center py-2 px-4">
                            <p className="font-semibold">Título:</p>
                            <p className="ml-2">{event.involved}</p>
                        </div>
                        <div className="flex justify-between items-center py-2 px-4">
                            <p className="font-semibold">Localidad:</p>
                            <p className="ml-2">N tribuna</p>
                        </div>
                        <div className="flex justify-between items-center py-2 px-4">
                            <p className="font-semibold">N° de Ticket:</p>
                            <p className="ml-2">10</p>
                        </div>
                        <div className="flex justify-between items-center py-2 px-4 border-t border-dashed">
                            <p className="font-semibold">Total:</p>
                            <p className="ml-2">$200</p>
                        </div>
                    </div>
                    <button className='bg-orange md:text-lg rounded-full text-white p-2 font-semibold mb-5 w-32 sm:w-36' onClick={handlePay}>Pagar</button>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default PaymentInfo;