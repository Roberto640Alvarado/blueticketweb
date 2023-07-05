import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey, faEye, faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerService } from '../../services/RegisterServices';
import { MessageSuccess } from '../../utils/Alert';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handllogin = () => {
        navigate('/login')
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Realizar lógica de registro o enviar datos a un servidor
        try {
            let response = await registerService.register(name, email, password);
            console.log(response);
            if (response != null) {
                MessageSuccess('Usuario creado correctamente');
            } else {
                console.log('No se pudo crear el usuario');
            }
        } catch (error) {
            console.log('Error', error);
        }
        // Reiniciar los campos del formulario
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex flex-col h-screen bg-gradient-to-b from-[#232528] to-blue-200">
            <div className="grid place-items-center mx-2 my-20 sm:my-auto">
                <form onSubmit={handleSubmit} className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg">
                    <div>
                        <h2 className="text-[#062343] font-poppins font-medium text-3xl md:text-4xl text-center mb-4">Bienvenidos/as</h2>
                        <h2 className="text-[#062343] font-poppins font-black text-3xl md:text-4xl text-center mb-6">Blue ticket</h2>
                    </div>
                    <div className="relative mt-2 rounded shadow-sm">
                        <input
                            type="text"
                            className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-gray bg-clip-padding py-2 pr-3 pl-10 mt-2 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                            id="name"
                            placeholder="Tu nombre de usuario"
                            value={name}
                            onChange={handleNameChange}
                            required
                        />
                        <label
                            htmlFor="floatingInput"
                            className="w-full pl-11 pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-700 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Nombre de usuario</label>
                        <div className="absolute inset-y-0 left-0 flex items-center">
                            <FontAwesomeIcon icon={faUser} className="h-5 m-4 mx-3" />
                        </div>
                    </div>
                    <div className="relative mt-2 rounded shadow-sm">
                        <input
                            type="email"
                            className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-gray bg-clip-padding py-2 pr-3 pl-10 mt-2 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                            id="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <label
                            htmlFor="floatingInput"
                            className="w-full pl-11 pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-700 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Correo</label>
                        <div className="absolute inset-y-0 left-0 flex items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="h-5 m-4 mx-3" />
                        </div>
                    </div>
                    <div className="relative mt-2 rounded shadow-sm">
                        <input
                            type="password"
                            className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-gray bg-clip-padding py-2 pr-3 pl-10 mt-2 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                            id="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <label
                            htmlFor="floatingInput"
                            className="w-full pl-11 pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-700 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Contraseña</label>
                        <div className="absolute inset-y-0 left-0 flex items-center">
                            <FontAwesomeIcon icon={faKey} className="h-5 mx-3" />
                        </div>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                            <FontAwesomeIcon icon={faEye} className="h-4" />
                        </div>

                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 mt-10 bg-blue rounded-md font-medium text-white capitalize focus:outline-none hover:shadow-none"
                    >
                        Crear Cuenta
                    </button>
                    <div className="mt-8 text-center">
                        <p className="text-gray-500 font-poppins">
                            ¿Ya tienes cuenta?{" "}
                            <a onClick={handllogin} href="#" className="text-blue-500 font-poppins underline">
                                Inicia Sesion
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;