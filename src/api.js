import { axios } from "axios"
import { LANGUAGES } from "./constants"

export const API = axios.create({
    baseURL:"https://emkc.org/api/v2/piston",
})

export const executeCode = async (language,sourceCode)=>{
    const res = await API.post("/execute",{
        "language":language,
        "version":LANGUAGES[language].version,
        "files":[
            {
                "content":sourceCode
            }
        ]
    })
    return res.data

}

