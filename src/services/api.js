import axios from "axios";

export let api;
const enviroment = import.meta.env.VITE_USER_NODE_ENV;

if (enviroment === "development") {
    api = axios.create({
        baseURL: "http://localhost:3333",
    });
} else {
    api = axios.create({
        baseURL: "https://sergiomello-foodexplorer-api.onrender.com",
    });
}
