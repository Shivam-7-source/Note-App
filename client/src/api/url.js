import axios from "axios";

const BACKEND_URL=axios.create({
    baseURL:"https://note-app-hjrz.onrender.com/"
})
export default BACKEND_URL
