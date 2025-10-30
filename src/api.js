import { axios } from "axios"

export const API = axios.create({
    baseURL:"https://emkc.org/api/v2/execute/piston",
    timeout:10000,
    headers:{"Content-Type": "application/json"}
})

API.post

