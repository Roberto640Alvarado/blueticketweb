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

const ChangePass = {
    getId: async( email ) =>{
        try {
            let response = await API.get('/public/get-user', {email: email});
            console.log(response);
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
    change: async(id, oldPass, newPass)=>{
        let payload = { oldPassword: oldPass, newPassword: newPass };
        try {
            let response = await API.patch(`/auth/update/${id}`, payload);
            console.log(response);
            if (response.status === 200) {
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
export default ChangePass;