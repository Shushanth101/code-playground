import React,{createContext, useEffect} from 'react'
import { useState } from 'react';
import { getLanguagesAndVersions } from '../api'; 

export const LanguageAndVersionContext = createContext();

function LanguageAndVersionProvider(props) {

  const [languagesAndVersions,setLanguageAndVersions] = useState([])

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

  fetchData()
},[])



  return (
    <LanguageAndVersionContext.Provider value={{languagesAndVersions}}>
      {props.children}
    </LanguageAndVersionContext.Provider>
  )
}

export default LanguageAndVersionProvider