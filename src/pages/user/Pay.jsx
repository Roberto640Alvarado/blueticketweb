import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faCcMastercard, faCcVisa } from '@fortawesome/free-brands-svg-icons';
import NavbarUser from "../../components/Navbars/NavbarUser";
import Footer from "../../components/Footer/Footer";
import { useParams } from 'react-router-dom';
import { Alert } from '../../utils/Alert';


export const Pay = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const handleTransaction = () => {
        Alert('¿Estas seguro de efectuar la compra?','Compra realizada')
        navigate(`/user/succesful-transaction/${id}`);
    }
    const handleBack = () => {
        navigate(`/user/purchase-ticket/${id}`);
    }
    return (
        <>
            <div className='container p-2 mt-2 text-center'>
                <div className='lg:items-center lg:justify-center lg:h-screen lg:space-x-5 lg:flex lg:flex-row md:flex md:space-y-5 md:flex-col md:justify-center  md:items-center '>
                    <div className='text-center  lg:ml-5 bg-pay-gray drop-shadow-xl py-3 lg:w-1/2 xl:w-1/3 md:w-2/3 rounded-xl'>

                        <label className=' font-bold text-lg lg:text-xl'> Completa la informacion: </label>

                        <div className='mt-4'>
                            <label className='block text-base mb-2 font-bold lg:text-md' for="">Nombre del tarjetahabiente:</label>
                            <input type='text' className='lg:ml-0 text-center w-80 placeholder:text-sm placeholder:text-center placeholder:pl-2 lg:w-5/6 p-1 leading-6 text-lg font-normal bg-white shadow border-2 border-gray rounded'
                                placeholder="José Simeon Cañas">
                            </input>
                            <label className='block text-base mb-2 mt-4 font-bold lg:text-md' for="">Numero de Tarjeta</label>
                            <div class="relative mt-2 rounded shadow-sm">
                                <input type='text' className='lg:ml-0 text-center w-80 placeholder:text-xs xl:placeholder:text-center placeholder:text-left placeholder:pl-2 lg:w-5/6 p-1 leading-6 text-lg font-normal bg-white shadow border-2 border-gray rounded'
                                    placeholder="Numero de tarjeta sin espacios ni guiones">
                                </input>
                                <div className='absolute inset-y-0 space-x-2 right-0 xl:pr-12 lg:pr-10 md:pr-24 pr-6 flex items-center text-sm'>
                                    <FontAwesomeIcon icon={faCreditCard} className='h-4' />
                                    <FontAwesomeIcon icon={faCcMastercard} className='h-4' />
                                    <FontAwesomeIcon icon={faCcVisa} className='h-4' />
                                </div>

                            </div>
                            <div className='mt-4'>
                                <label className='block text-base mb-2 font-bold lg:text-md' for="">Codigo de verificacion (CVV):</label>
                                <input type='text' className='lg:ml-0 w-20  text-center  placeholder:text-sm placeholder:text-center lg:w-20 p-1 leading-6 text-lg font-normal bg-white shadow border-2 border-gray rounded'
                                    placeholder="000">
                                </input>
                            </div>
                            <div className='mt-4 '>
                                <label className='block text-normal mb-2 font-bold lg:text-md' for="">Fecha de vencimiento de la tarjeta:</label>
                                <div className=' flex  mx-20  '>
                                    <div className='flex flex-col xl:ml-14 '>
                                        <label className='text-normal mb-2 font-bold  lg:text-md' for="">Mes:</label>
                                        <button className=' relative text-lg px-1 py-1 leading-6 font-normal  flex justify-center items-center  bg-white focus:outline-none shadow border-2 border-gray focus:border-black text-black rounded group'>
                                            <form action="#">
                                                <select className='text-sm text-center'>
                                                    <option value="Enero">Enero</option>
                                                    <option value="Febrero">Febrero</option>
                                                    <option value="Marzo">Marzo</option>
                                                    <option value="Abril">Abril</option>
                                                    <option value="Mayo">Mayo</option>
                                                    <option value="Junio">Junio</option>
                                                    <option value="Julio">Julio</option>
                                                    <option value="Agosto">Agosto</option>
                                                    <option value="Septiembre">Septiembre</option>
                                                    <option value="Octubre">Octubre</option>
                                                    <option value="Noviembre">Noviembre</option>
                                                    <option value="Diciembre">Diciembre</option>
                                                </select>
                                            </form>
                                        </button>
                                    </div>

                                    <div className='flex flex-col ml-6'>
                                        <label className='text-base mb-2 font-bold lg:text-md' for="">Año:</label>
                                        <button className=' relative text-lg px-2 py-1 leading-6 font-normal  flex justify-center items-center  bg-white focus:outline-none shadow border-2 border-gray focus:border-black text-black rounded group'>
                                            <form action="#">
                                                <select className='text-sm text-center'>
                                                    <option value="2023">2023</option>
                                                    <option value="2024">2024</option>
                                                    <option value="2025">2025</option>
                                                    <option value="2026">2026</option>

                                                </select>
                                            </form>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='rounded-xl shadow-2xl lg:ml-5 xl:w-1/3 bg-white2 drop-shadow-xl md:w-2/3 bg-pay-gray pb-3'>

                        <div className='mt-5 pt-3 '>
                            <label className=' font-extrabold text-lg'> Informacion del pago: </label>
                        </div>
                        <table className='table-auto m-auto mt-4 lg:m-auto md:m-auto md:mt-4 lg:mt-4'>
                            <tbody>
                                <tr>
                                    <td className='pl-4 pr-32'>+1 Concierto Bad Bunny</td>
                                    <td>$30</td>
                                </tr>
                                <tr>
                                    <div>
                                        <td className='pl-4'>+2 Concierto Rosalia</td>
                                    </div>
                                    <td>$70</td>

                                </tr>
                                <tr>
                                    <div>
                                        <td className='pl-4'>+1 Obra Romeo y Julieta</td>
                                    </div>
                                    <td>$10</td>

                                </tr>
                                <tr className='border-t-2 border-b-2 md: lg:w-2/3 lg:ml-5'>
                                    <td className=' px-60 pl-4 lg:pl-0'>Subtotal</td>
                                    <td>$110</td>
                                </tr>

                                <tr>
                                    <td className=' font-bold text-left pl-4'>Total</td>
                                    <td className='font-bold'>$110</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className='w-full mt-5'>
                            <input type="checkbox" className='' />
                            <label htmlFor="" className='text-sm'>Acepto haber leido los terminos y condiciones y politicas de privacidad para hacer este pago</label>
                        </div>

                        <button type='submit' className='mt-4 bg-pay-gray  hover:bg-locations-gray text-black font-bold p-3 rounded-lg' onClick={handleTransaction}>
                            <p>Efectuar pago</p>
                        </button>
                        <button type='submit' className='mt-4 bg-pay-gray  hover:bg-locations-gray text-black font-bold p-3 rounded-lg' onClick={handleBack}>
                            <p>Cancelar</p>
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Pay;