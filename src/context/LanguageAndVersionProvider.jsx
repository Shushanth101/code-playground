import React,{createContext, useEffect} from 'react'
import { useState } from 'react';
import { getLanguagesAndVersions } from '../api'; 

export const LanguageAndVersionContext = createContext();

function LanguageAndVersionProvider(props) {

  const [languageAndVersions,setLanguageAndVersions] = useState([])

useEffect(()=>{
    const fetchData = async()=>{
      try{
        const data = await getLanguagesAndVersions();
        setLanguageAndVersions(data)
      }catch(error){
        console.error("Error fetching languages and versions:",error)
        setLanguageAndVersions([])
    }
  }

  return fetchData()
},[])



  return (
    <LanguageAndVersionContext.Provider value={{languageAndVersions}}>
      {props.children}
    </LanguageAndVersionContext.Provider>
  )
}

export default LanguageAndVersionProvider