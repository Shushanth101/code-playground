import { axios } from "axios"
import { LANGUAGES } from "./constants"

export const API = axios.create({
    baseURL:"https://emkc.org/api/v2/piston",
})

export const executeCode = async (language,code)=>{
    const res = await API.post("/execute",{
        "language":language,
        "version":LANGUAGES[language].version,
        "files":[
            {
                "content":code
            }
        ]
    })
    return res.data

}

