import React, { useState } from 'react'
// import { Input } from '@chakra-ui/react'
import SwitshLangue from './SwitshLangue'
const Page = () => {
    const [currentLangue,setCurrentLangue]=useState()
    const handelChangeLangue =(value)=>{
        setCurrentLangue(value)
    }
    const displyMessage = ()=>{
        switch (currentLangue) {
            case "AR" : return"ٱلسَّلَامُ عَلَيْكُمْ";
            case "FR" : return"Bonjour";
            case "EN" : return"hello mtf";
            case "ES" : return"hola";
        }

    }
  return (
    <>
     <SwitshLangue onLangueChange={handelChangeLangue} ></SwitshLangue>
     {/* <Input type='submit' value={displyMessage} /> */}
     <div className="badge badge-pill badge-danger">{displyMessage()}</div>
    </>
  )
}

export default Page
