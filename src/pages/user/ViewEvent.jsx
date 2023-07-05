import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarUser from "../../components/Navbars/NavbarUser";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import EventService from '../../services/EventServices';
import context from '../../context/UserContex';


export const ViewEvent = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    const navigate = useNavigate();
    console.log('code: ' + id);

    useEffect(() => {
        fetchEventDetails();
    }, []);

    const fetchEventDetails = async () => {
        let token = context.getToken();
        if (token != null) {
            let res = await EventService.gotOneEventAuth(token,id);
                console.log(res);
                if (!res.error) {
                let data = res;
                console.log(data);
                setEvent(data);
            }
        }else{
            let response = await EventService.getOneEvent(id);
            console.log(response);
            if (!response.error) {
                let data = response;
                console.log(data);
                setEvent(data);
            }
        }
    };
    if (!event) {
            return <div>Cargando...</div>;
        }

    console.log(event.title, event.date);
    const handleBack = () => {
        if (context.getToken != null) {
            navigate('/user/home');
        }else{
            navigate('/');
        }
        
    }
    const handlePurchase = () => {
        if (context.getToken != null) {
            navigate(`/user/purchase-ticket/${id}`);
        }else{
            navigate('/login');
        }
    }
    return (
        <>
            <Carousel />
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-3xl mb-5 lg:ml-10">Localidades</h1>
                    <div className="grid grid-cols-2 ">
                        <div className="flex justify-between lg:ml-20">
                            <p className="text-2xl">La Playa</p>
                        </div>
                        <div className="ml-10 lg:ml-20">
                            <p className="font-bold text-2xl">$175</p>
                        </div>
                        <div className="flex justify-between lg:ml-20">
                            <p className="text-2xl">Platinum</p>
                        </div>
                        <div className="ml-10 lg:ml-20">
                            <p className="font-bold text-2xl">$125</p>
                        </div>
                        <div className="flex justify-between lg:ml-20">
                            <p className="text-2xl">VIP</p>
                        </div>
                        <div className="ml-10 lg:ml-20">
                            <p className="font-bold text-2xl">$100</p>
                        </div>
                        <div className="flex justify-between lg:ml-20">
                            <p className="text-2xl">Platea</p>
                        </div>
                        <div className="ml-10 lg:ml-20">
                            <p className="font-bold text-2xl">$75</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center mt-5 md:mt-0 lg:mt-0">
                    <h1 className="font-bold text-3xl mb-5">{event.title}</h1>
                    <div className="flex flex-col space-y-5">
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faCalendar} className='w-8 h-8 text-blue' />
                            <p className="text-2xl">{event.date}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faClock} className='w-8 h-8 text-blue' />
                            <p className="text-2xl">{event.hour}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faLocationDot} className='w-8 h-8 text-blue' />
                            <p className="text-2xl">{event.duration}</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center py-10 md:justify-between md:px-4">
                        <button className="px-4 py-2 bg-orange rounded-md mr-4 text-black font-bold mb-2 md:mb-0" onClick={handlePurchase}>Comprar Ticket</button>
                        <button className="px-4 py-2 bg-blue rounded-md text-white font-bold" onClick={handleBack}>Regresar</button>
                    </div>
                </div>

            </div>


            <Footer />
        </>
    );
};

export default ViewEvent;