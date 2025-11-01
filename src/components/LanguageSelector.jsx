import React, { useEffect, useState } from "react";
import { getLanguages } from "../api";
import {  DEFAULT_SNIPPETS } from "../constants";

export default function LanguageSelector({ language, setLanguage,setCode }) {
  const [languages, setLanguages] = useState([]); 

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    setCode(DEFAULT_SNIPPETS[newLang] || "// No default snippet available!");
  };

  useEffect(() => {
    async function fetchLanguages() {
      try {
        const data = await getLanguages();
        const popular = ["typescript", "javascript", "python", "c", "c++", "csharp","go","java","ruby","rust","php"];
        const filtered = data.filter((item) =>
          popular.includes(item.language.toLowerCase())
        );
        setLanguages(filtered); 
        console.log("Fetched languages:", data);
      } catch (error) {
        console.error("Error fetching languages:", error);
      }
    }

    fetchLanguages();
  }, []);

  return (
    <select
      style={{
        backgroundColor: "#1c1c1cff",
        color: "white",
        cursor: "pointer",
        padding: "6px 10px",
        borderRadius: "6px",
        border: "1px solid #333",
      }}
      onChange={handleLanguageChange}
      value={language}
    >
      {languages.map((item, index) => (
        <option key={index} value={item.language}>
          {item.language.charAt(0).toUpperCase() +
            item.language.slice(1)}{" "}
          ({item.version})
        </option>
      ))}
    </select>
  );
}
