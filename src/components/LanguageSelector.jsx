import React, { useEffect, useContext, useState } from "react";
import { LanguageAndVersionContext } from "../context/LanguageAndVersionProvider";
import { LANGUAGES } from '../constants'; 
import { DEFAULT_CODE_SNIPPETS } from '../constants'; 

export default function LanguageSelector({ language, setLanguage, setCode }) {
  const { languagesAndVersions } = useContext(LanguageAndVersionContext);
  const [languages, setLanguages] = useState([]);

 const handleLanguageChange = (e) => {
  const newLang = e.target.value;

  const snippetKey = newLang === "c++" ? "cpp" : newLang;

  setLanguage(newLang);
  setCode(
    DEFAULT_CODE_SNIPPETS[snippetKey]?.defaultCode ||
      "// No default code available!"
  );
};


  useEffect(() => {
    if (!languagesAndVersions || languagesAndVersions.length === 0) return;
    const popular = ["typescript", "javascript", "python", "c", "c++", "csharp", "go", "java", "ruby", "rust", "php"];
    const filtered = languagesAndVersions?.filter((item) =>
      popular.includes(item.language.toLowerCase())
    ) || [];
    setLanguages(filtered);
    console.log("Filtered languages:", filtered);
  }, [languagesAndVersions]); 

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
