import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import { MessageSuccess } from '../../utils/Alert';
import { useNavigate } from 'react-router-dom';
import EventService from '../../services/EventServices';
import CategoryService from '../../services/CategoryService';
import context from '../../context/UserContex';

export const CreateEvent = () => {
    const navigate = useNavigate();
    const [imageUrl, setImageUrl] = useState('');

    const [title, setTitle] = useState('');
    const [involved, setInvolved] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [duration, setDuration] = useState('');
    const [categories, setCategories] = useState([]);
    const [sponsor, setSponsor] = useState('');
    const [imagesURL1, setImagesURL1] = useState('');
    const [imagesURL2, setImagesURL2] = useState('');

    const [selectedCategoryId, setSelectedCategoryId] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            const token = context.getToken();
            try {
                const response = await CategoryService.getAllEvents(token);
                console.log(response);
                if (Array.isArray(response.data)) {
                    setCategories(response.data);
                    console.log(response.data);
                }
            } catch (error) {
                console.error('Error al obtener las categorías:', error);
            }
        };

        fetchCategories();
    }, []);


    const handleCreateEvent = async (e) => {
        e.preventDefault();
        const token = context.getToken();
        console.log(token);
        console.log(title, date,hour,duration,sponsor,involved,imagesURL1,imagesURL2,selectedCategoryId);
        const response = await EventService.createEvent(
            token,
            title,
            date,
            hour +':00',
            duration,
            sponsor,
            involved,
            imagesURL1,
            imagesURL2,
            selectedCategoryId
        );
        if (!response.error) {
            MessageSuccess('Evento creado correctamente');
            navigate('/admin/upcoming');
        }
    };



    /*const handleUrlChange = (e) => {
        setImageUrl(e.target.value);
    };*/

    const handleUrlSubmit = (e) => {
        e.preventDefault();

    };

    /*const handleCreateEvent = () => {
        MessageSuccess('Evento creado correctamente');
        navigate('/admin/upcoming');
    }*/

    const handlLocation = () => {
        navigate('/admin/newlocation');
    }

    const handlCancel = () => {
        navigate('/admin/upcoming');
    }
    return (
        <>
            <section className='bg-white dark:bg-gray-900'>
                <div className='container px-6 py-10 mx-auto'>
                    <h1 className='text-base md:text-2xl font-bold text-black capitalize lg:text-4xl dark:text-white text-center'>
                        Crear Evento
                    </h1>

                    <div className='mt-3 lg:mt-8 flex flex-col items-center lg:flex lg:flex-row lg:items-start'>
                        {imageUrl ? (
                            <img
                                src={imageUrl}
                                alt='Preview'
                                className='w-2/3 lg:mx-6 xl:w-1/3 h-5/6 lg:h-1/2 lg:w-1/2 xl:h-full rounded-xl object-cover'
                            />
                        ) : (
                            <form onSubmit={handleUrlSubmit} className="flex justify-center items-center">
                                <label
                                    htmlFor='image-url'
                                    className='cursor-pointer flex flex-col p-10 lg:p-24 lg:mt-24 xl:mt-24 items-center rounded-xl border-2 border-dashed border-blue-400 bg-white xl:p-32 text-center'
                                >
                                    <div className='text-center'> {/* Movida la clase "text-center" al contenedor del input */}
                                        <input
                                            id='image-url'
                                            type='text'
                                            className='h-20 w-80 lg:w-96 p-4 text-2xl font-bold bg-gray-100 rounded-xl'
                                            placeholder='Pega la URL de la imagen aquí'
                                            value={imagesURL1}
                                            onChange={(e) => setImagesURL1(e.target.value)}
                                        />
                                    </div>

                                    <button type='submit' className='mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg'>
                                        Mostrar imagen
                                    </button>
                                </label>
                            </form>
                        )}

                        <div className='mt-6 lg:w-1/2 lg:mt-0 lg:mx-6'>
                            <div className='mb-6 pl-2 lg:pl-0'>
                                <label className='text-base block lg:ml-0 mb-2 font-extrabold lg:text-lg' for="">Titulo del evento</label>
                                <input className='inline-block w-80 lg:w-5/6 p-2 leading-6 text-lg font-normal bg-white shadow border-2 border-gray rounded' type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className='mb-6 pl-2 lg:p-0'>
                                <label className='block text-base mb-2 font-extrabold lg:text-lg' for="">Involucrados</label>
                                <input className='inline-block lg:ml-0 w-80 lg:w-5/6 p-2 leading-6 text-lg font-normal bg-white shadow border-2 border-gray rounded' type="text"
                                    value={involved}
                                    onChange={(e) => setInvolved(e.target.value)} />
                            </div>
                            <div className='-mx-3 flex lg:flex-nowrap lg:flex-row flex-col' >
                                <div className='w-full px-3 sm:w-auto'>
                                    <div className='mb-5 pl-2 lg:pl-0'>
                                        <label
                                            for="date" pt-20 pr-20 bg-blue
                                            className='mb-3 block text-base font-extrabold text-black'>Fecha</label>
                                        <input
                                            type="date"
                                            name="date"
                                            id="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                            className='lg:w-xl rounded-md border-gray bg-white shadow border-2 py-2 px-2 lg:py-3 lg:px-6 text-base font-normal 
                                        text-black outline-none focus:border-black focus:shadow-md' />
                                    </div>
                                </div>
                                <div className='w-full px-3 sm:w-auto'>
                                    <div className='mb-5 pl-2 lg:pl-0'>
                                        <label for="time" class=" mb-3 block text-base font-extrabold text-black">Hora</label>
                                        <input
                                            type="time"
                                            name="time"
                                            id="time"
                                            value={hour}
                                            onChange={(e) => setHour(e.target.value)}
                                            className='lg:w-xl rounded-md shadow border-2 border-gray bg-white py-2 px-2 lg:py-3 lg:px-6 text-base font-medium 
                                        text-black outline-none focus:border-black focus:shadow-md' />

                                    </div>
                                </div>
                                <div className='lg:w-full lg:px-3 sm:w-1/2'>
                                    <div className='mb-5 pl-5 lg:pl-0'>
                                        <label for="time" class=" mb-3 block text-base font-extrabold text-black">Duracion</label>
                                        <input
                                            type="number"
                                            name="number"
                                            id="number"
                                            value={duration}
                                            onChange={(e) => setDuration(e.target.value)}
                                            className='lg:w-1/3 rounded-md shadow border-2 border-gray bg-white p-2 lg:py-3 lg:px-6 text-base font-medium 
                                        text-black outline-none focus:border-black focus:shadow-md' />
                                    </div>
                                </div>
                            </div>
                            <div className='mb-6 pl-2 lg:pl-0'>
                                <label className='block mb-2 font-extrabold text-normal lg:text-lg' for="">Categoria</label>
                                <div className='relative flex bg-gray-100'>
                                    <button className=' relative text-lg px-3 py-3 leading-6 font-normal  flex justify-center items-center  bg-white focus:outline-none shadow border-2 border-gray focus:border-black text-black rounded group'>
                                        <form action="#">
                                            <select className='text-sm text-center'
                                                value={selectedCategoryId}
                                                onChange={(e) => setSelectedCategoryId(e.target.value)}>
                                                {categories.map((category) => (
                                                    <option key={category.id} value={category.id}>{category.description}
                                                    </option>
                                                ))}
                                            </select>
                                        </form>
                                    </button>
                                </div>
                            </div>
                            <div className='mb-6 pl-2 lg:pl-0'>
                                <label className='block mb-2 font-extrabold text-normal lg:text-lg' for="">Patrocinadores</label>
                                <input value={sponsor} onChange={(e) => setSponsor(e.target.value)} className='inline-block w-5/6 p-2 leading-6 text-lg font-normal bg-white shadow border-2 border-gray rounded' type="text" />
                            </div>
                            <div className='mb-6 pl-2 lg:pl-0'>
                                <label className='block mb-2 font-extrabold text-normal lg:text-lg' for="">Imagen 2</label>
                                <input value={imagesURL2} onChange={(e) => setImagesURL2(e.target.value)} className='inline-block w-5/6 p-2 leading-6 text-lg font-normal bg-white shadow border-2 border-gray rounded' type="url" />
                            </div>
                            <div className='flex flex-row items-start  lg:mx-0 gap-5 lg:flex-col '>
                                <button onClick={handlLocation} type="submit" class=" lg:ml-0  py-4 px-4  lg:px-5 lg:py-3 bg-blue rounded-2xl
                            font-extrabold text-white capitalize
                            focus:outline-none hover:shadow-none">
                                    <p className='text-xs lg:text-base  lg:w-24' >Crear Localidad</p>
                                </button>
                                <button onClick={handleCreateEvent} type="submit" className='lg:ml-0 lg:hidden py-4 px-4  lg:px-5 lg:py-3 bg-orange rounded-2xl
                            font-extrabold text-white capitalize
                            focus:outline-none hover:shadow-none'>
                                    <p className='text-xs lg:text-base  lg:w-24' >Crear Evento</p>
                                </button>

                                <button onClick={handlCancel} type="submit" className='lg:ml-0 py-4 px-4 lg:hidden lg:px-5 lg:py-3 bg-blue rounded-2xl
                            font-extrabold text-white capitalize
                            focus:outline-none hover:shadow-none'>
                                    <p className='text-xs lg:text-base  lg:w-24' >Cancelar</p>
                                </button>
                            </div>
                            <div className='lg:flex hidden lg:flex-row gap-2 lg:gap-5 lg:pt-3 lg:ml-80 '>
                                <button onClick={handleCreateEvent} type="submit" className='ml-14 px-3 lg:px-5 mt-5 lg:py-3 lg:w-32 bg-orange rounded-2xl
                    font-extrabold text-black capitalize
                    focus:outline-none hover:shadow-none'>
                                    <p className='lg:w-auto text-xs lg:text-base'>Crear Evento</p>
                                </button>
                                <button onClick={handlCancel} type="submit" className='py-3 px-5 lg:px-5 mt-5 lg:py-3 lg:w-32 bg-blue rounded-2xl
                    font-extrabold text-white capitalize
                    focus:outline-none hover:shadow-none'>
                                    <p className='text-xs lg:text-base'>Cancelar</p>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>

    )
}

export default CreateEvent;



