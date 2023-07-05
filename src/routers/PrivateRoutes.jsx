import { Navigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import context from '../context/UserContex';
import authService from '../services/AuthServices';
import { LoadMessage } from '../utils/Alert';

const PrivateRoutes = () => {
    const [isClient, setIsClient] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const useAuth = async() =>{
        const token = context.getToken();
        try {
            let res = await authService.getRole(token);
                res.forEach(element => {
                    if (element.id === 1) {
                        setIsClient(true);
                    }
                console.log(isClient, element.id);
            });
        } catch (error) {
            console.error('Error:', error);
        }finally{
            setIsLoading(false);
        }
    };

    useEffect(() =>{
        useAuth();
    },[]);

    if (isLoading) {
        return LoadMessage; // Mostrar indicador de carga
    }
    
return isClient ? <Outlet/> : <Navigate to='/'/>
}
export default PrivateRoutes;