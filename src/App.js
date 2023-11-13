import React from 'react'
import Navbar from './components/Navbar'
import Textutils from './components/Textutils'
import { useState } from 'react';

export default function App() {
  const [btnText,setBtnText]=useState("Enable dark mode");
  const [color,setcolor]=useState({
    color:'black'
  })
  const modechange=()=>{
    if(btnText==="Enable dark mode"){
      setBtnText("Disable")
      setcolor({color:'white'})
      document.body.style.backgroundColor='black'
    }
    else{
      setBtnText("Enable dark mode")
      setcolor({color:'black'})
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
    <Navbar value={btnText} mode={modechange}/>
    <Textutils onclick={modechange} style={color}/>
    
    </>
  )
}
