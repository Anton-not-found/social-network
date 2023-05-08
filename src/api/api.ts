import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "258c7efb-8639-4fa5-87de-e07b185f8dee"
    }
})


export const usersAPI = {
     getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}` )
            .then(res => res.data)
    },
}




