import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey, faEye } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { GoogleLogin } from '@leecheuk/react-google-login';
import { useNavigate } from 'react-router-dom';
import { gapi } from 'gapi-script';
import context from '../../context/UserContex';
import authService from '../../services/AuthServices';
import { NotFound, MessageSuccess } from '../../utils/Alert';

const Login = () => {
  const clientID = "168022975229-t96ihknltr4skhun6pttgbbpla3v2f1l.apps.googleusercontent.com";
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const start = () => {
      gapi.load("auth2", () => {
        gapi.auth2.init({
          client_id: clientID,
        });
      });
    };
    start();
  }, []);

  const onSuccess = (response) => {
    navigate('/user/home');
  };

  const handleChange = () =>{
    navigate('/changePassword');
  }

  const onFailure = () => {
    console.log("Failed");
  };
  const useAuth = async() =>{
    const token = context.getToken();
    try {
        let res = await authService.getRole(token);
            res.forEach(element => {
              console.log(element.id);
                if (element.id === 1) {
                    setIsClient(true);
                }else /*if(element.id === 2)*/{
                    setIsAdmin(true);
                }
        });
        if (isClient) {
          MessageSuccess('Ha iniciado sesión');
          navigate('/user/home');
        }else if(isAdmin){
          MessageSuccess('Ha iniciado sesión');
          navigate('/admin/home');
        }
    } catch (error) {
        console.error('Error:', error);
    }finally{
        setIsLoading(false);
    }
    if (isLoading) {
      return <p>Cargando...</p>;  // Mostrar indicador de carga
  }
};
  const handleLogin =  async() => {
    try {
      let response = await context.login(email,password);
      console.log(response.status);
      useAuth();
      
    } catch (error) {
      console.log('Error al iniciar sesión', error);
      NotFound('Credenciales Incorrectas');
    }
  };


  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#232528] to-blue-200">
      <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg">
          <div>
            <h2 className="text-[#062343] font-poppins font-medium text-3xl md:text-4xl text-center mb-4">Bienvenidos/as</h2>
            <h2 className="text-[#062343] font-poppins font-black text-3xl md:text-4xl text-center mb-6">Blue ticket</h2>
          </div>
          <div className="flex justify-center mt-8">
            <GoogleLogin
              clientId={clientID}
              buttonText="Iniciar sesión con Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              className="w-full max-w-xs flex items-center justify-center"
            />
          </div>
          <div className="mt-4 text-center">
            <div className="flex items-center justify-center">
              <div className="flex-grow border-b border-gray-300 w-2/5" />
              <p className="mx-2 text-gray-500 font-poppins">or</p>
              <div className="flex-grow border-b border-gray-300 w-2/5" />
            </div>
          </div>
          <div className="relative mt-2 rounded shadow-sm">
            <input
              type="email"
              className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-gray bg-clip-padding py-2 pr-3 pl-10 mt-2 text-gray-900 placeholder-gray-500 text-md focus:outline-none"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute left-3 top-3 text-neutral-500 text-lg"
            />
          </div>
          <div className="relative mt-4 rounded shadow-sm">
            <input
              type="password"
              className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-gray bg-clip-padding py-2 pr-3 pl-10 mt-2 text-gray-900 placeholder-gray-500 text-md focus:outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={faKey}
              className="absolute left-3 top-3 text-neutral-500 text-lg"
            />
            <FontAwesomeIcon
              icon={faEye}
              className="absolute right-3 top-3 text-neutral-500 text-lg cursor-pointer"
            />
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={handleLogin}
              className="bg-gradient-to-r from-[#A5BFF7] to-[#778EE9] w-full py-3 rounded text-white text-xl font-semibold focus:outline-none"
            >
              Iniciar sesión
            </button>
          </div>
          <p className="mt-4 text-center">
            <button className="text-blue-500 font-poppins font-medium" onClick={handleChange}>¿Olvidaste tu contraseña?</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
