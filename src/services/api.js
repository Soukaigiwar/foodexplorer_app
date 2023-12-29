import axios from "axios";

export const api = axios.create({
    baseURL: "https://sergiomello-foodexplorer-api.onrender.com"
});
