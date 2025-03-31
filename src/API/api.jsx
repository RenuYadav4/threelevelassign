import axios from "axios";

const api = axios.create({
    baseURL:
    "https://reqres.in/",
});

export const getUser = (page)=>{
    return api.get(`api/users?page=${page}`);
}

export const postUser = (post) => {
    return api.post("/api/login", post);
};