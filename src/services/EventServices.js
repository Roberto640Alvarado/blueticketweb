import axios from 'axios';

const BASE_URL = 'https://blueticket01-db3fe21ca65d.herokuapp.com';

const API = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const EventService = {
    getAllEvents: async(token, page = 0, size = 9, title = '')=>{
        try {
            const response = await API.get('/public/home', {
                params: { page, size, title },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }); 
        
            if (response.status === 200) {
                console.log(response);
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
    },
    createEvent: async(token,title, date, hour, duration, sponsor, involved, image1, image2, category) => {
        let payload = {
            title: title,
            date: date,
            hour: hour,
            duration: duration,
            sponsor: sponsor,
            involved: involved,
            image1: image1,
            image2: image2,
            category: category,
            };
            console.log(payload);
            try {
            let response = await API.post('/events/save', payload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },

            });
            //console.log(response.data.message);
            console.log(response);
            if (response.status === 201) {
                return response;
            } else {
                throw new Error(response.status);
            }
            } catch (error) {
            return { error: error };
            }
    },
    getOneEvent: async (id) =>{
        try {
            const response = await API.get(`/public/event/${id}`);
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
    },
    gotOneEventAuth: async (token, id) =>{
        try {
            const response = await API.get(`/public/event/${id}`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
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


export default EventService;