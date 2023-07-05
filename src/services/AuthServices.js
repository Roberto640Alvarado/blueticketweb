import axios from "axios"; 

const BASE_URL = "https://blueticket01-db3fe21ca65d.herokuapp.com";

const API = axios.create(
    {
        baseURL: BASE_URL,
        headers: {
            "Content-Type": "application/json",
        }
    }
);

const authService = {
    login: async (identifier, password)=>{
        let payload = { identifier: identifier, password: password };
        try {

            let response = await API.post('/auth/login', payload);
            console.log(response);
            //console.log(response.data);
            //console.log(response.status);
            if (response.status === 200) {
                return response;
            } else {
                throw new Error(response.status);
            }

        } catch (error) {
            console.log(error);
            return {
                hasError: true,
            };
        }
    },
    verifyToken: async (token) => {
        try {
            let response = await API.get('/auth/whoami', {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            //console.log(response);
            if (response.status === 200) {
                console.log(response.data.id);
                return response.data.id;
            } else {
                throw new Error(response.status);
            }
        } catch (error) {
            console.log(error);
            return {
                hasError: true,
            };
        }
    },
    getRole: async (token) =>{
        try {
            let response = await API.get('/assing-role/get-role', {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            console.log(response);
            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            } else {
                throw new Error(response.status);
            }
        } catch (error) {
            console.log(error);
            return {
                hasError: true,
            };
        }
    }
}

export default authService;