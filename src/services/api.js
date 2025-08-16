import axios from "axios";

// URL BASE:
// https://api.themoviedb.org/3
//https://api.themoviedb.org/3/movie/now_playing?api_key=6a0d6ea36b46575a3dd561255bb7b207

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default api;