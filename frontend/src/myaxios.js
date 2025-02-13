import axios from "axios";
import { serverLink } from "../server";

const myaxios = axios.create({
    baseURL: serverLink,
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
    ,
    withCredentials: true,


})
export default myaxios