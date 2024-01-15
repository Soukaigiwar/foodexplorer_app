import axios from "axios";

export let api;
const enviroment = import.meta.env.DEV;

console.log(import.meta.env.DEV);
console.log(enviroment);

if (enviroment) {
    api = axios.create({
        baseURL: "http://localhost:3333",
    });
} else {
    api = axios.create({
        baseURL: "https://sergiomello-foodexplorer-api.onrender.com",
    });
}
