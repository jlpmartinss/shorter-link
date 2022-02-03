

import axios from "axios";  
export const key = "6b1a792e1837238710738df018628200d8af992d";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer: ${key}`
    }
})

export default api;