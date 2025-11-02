import React,{createContext, useEffect} from 'react'
import { useState } from 'react';
import { getLanguagesAndVersions } from '../api'; 

const LanguageAndVersionContext = createContext();

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
    <LanguageAndVeersionContext.Provider value={{languageAndVersions}}>
      {props.children}
    </LanguageAndVeersionContext.Provider>
  )
}

export default LanguageAndVersionProvider