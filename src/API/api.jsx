import axios from "axios";

const api = axios.create({
    baseURL:
        "https://reqres.in/",
});

export const getUser = (page) => {
    return api.get(`api/users?page=${page}`);
}

export const postData = (post) => {
    return api.post("/api/login", post);
}

// update(put)
export const updateUser = async (id, data) => {
    const res = await api.put(`/api/users/${id}`, data);
    return res.data;
};

//   delete
export const deleteUser = async (id) => {
   return await api.delete(`/api/users/${id}`)
}
