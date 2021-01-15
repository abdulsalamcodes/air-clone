import axios from "axios";


const instance = axios.create({
    baseURL: "https://api.unsplash.com",
    headers: { "Authorization": "Client-ID gnDiP-kLa9SD_zK8lqdFY_IK9Sg4ydRgMd6VbnJykx4" }
})


export default instance;