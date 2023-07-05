import { Navigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import context from "../context/UserContex";
import authService from '../services/AuthServices';

const PrivateRoutesAdmin = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() =>{
        useAuth();
    },[]);

    const useAuth = async() =>{
        const token = context.getToken();
        try {
            let res = await authService.getRole(token);
                res.forEach(element => {
                    if (element.role === "Admin") {
                        setIsAdmin(true);
                    }
                console.log(isAdmin);
            });
        } catch (error) {
            console.error('Error:', error);
        }finally{
            setIsLoading(false);
        }
    };
    if (isLoading) {
        return <p>Cargando...</p>; // Mostrar indicador de carga
    }
return (
    isAdmin ? <Outlet/> : <Navigate to='/'/>
    )
}
export default PrivateRoutesAdmin;