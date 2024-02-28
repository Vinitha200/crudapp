import React from 'react'
import backButton from "../../assest/download.png"
import { useNavigate } from 'react-router-dom'
function BackButon({url}) {
   const navigation = useNavigate()

  const HandleBackButton =()=>{
    navigation(`${url}`)
  }
  return (
    <div>
        <img 
        src={backButton} 
        onClick={HandleBackButton}
        style={{cursor:"pointer",height:"20px"}}></img>
    </div>
  )
}

export default BackButon