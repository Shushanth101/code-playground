import axios from "axios"

export const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston",
})

export const executeCode = async (language, code, languagesAndVersions) => {
    console.log("Executing code in language:", language)
    
    // Find the matching language data from context
    const languageData = languagesAndVersions.find(
        lang => lang.language.toLowerCase() === language.toLowerCase()
    );

    if (!languageData) {
        throw new Error(`Language ${language} not found in available runtimes`);
    }

    const res = await API.post("/execute", {
        "language": languageData.language,
        "version": languageData.version,
        "files": [
            {
                "name": `main.${getDefaultExtension(language)}`,
                "content": code
            }
        ]
    })
    return res.data
}

// Helper function for fallback extensions
const getDefaultExtension = (language) => {
    const extensions = {
        javascript: 'js',
        python: 'py',
        java: 'java',
        cpp: 'cpp',
        typescript: 'ts',
        csharp: 'cs',
        ruby: 'rb',
        rust: 'rs',
        php: 'php',
        go: 'go'
    };
    return extensions[language.toLowerCase()] || 'txt';
}

export const getLanguagesAndVersions = async () => {
    const res = await API.get("/runtimes")
    return res.data
}