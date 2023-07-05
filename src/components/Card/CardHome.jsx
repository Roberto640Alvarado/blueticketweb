import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import context from '../../context/UserContex';

export const CardHome = (props) => {
    const navigate = useNavigate();
    const [code, setCode] = useState("");

    const hello = () => {
        const token = context.getToken();
        //setCode(props.id);
        
        
        if (token == null) {
            navigate(`/info/${props.id}`)
        }else if (token != null) {
            navigate(`/user/info/${props.id}`);
        }
        
    }
    return (
        <>
            <div className="bg-white m-auto md:m-0 shadow-lg rounded-t-3xl overflow-hidden w-9/12 md:w-2/3 lg:w-2/3 hover:cursor-pointer" onClick={hello} >
                <img className="w-full h-64 object-cover object-center rounded-t-lg" src={props.image1} alt="Artista" />
                <div className=" bg-blue h-10">
                    <h2 className="text-white font-bold text-2xl text-center">{props.title}</h2>
                </div>
            </div>


        </>
    );
};

export default CardHome;