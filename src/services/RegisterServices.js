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

export const registerService = {
    register: async(username, email, password) => {
        let payload = { username: username, email: email, password: password };
        try {
            let response = await API.post('/auth/signup', payload);
            console.log(response.data.message);
            //console.log(response.data);
            //console.log(response.status);
            console.log(response);
            if (response.status === 201) {
                return response;
            } else {
                throw new Error(response.status);
            }
        } catch (error) {
            return {error: error}
        }
    }
}