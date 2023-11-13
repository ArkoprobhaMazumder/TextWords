import React, { useState } from 'react'
export default function Textutils(props) {

  const[text,setText]=useState(null);

  const handelOnChange=(event)=>{
    setText(event.target.value);
  }
  const handelUpChanange=()=>{
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handelLpChanange=()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }
  const clearText=()=>{
    let newText=" ";
    setText(newText);
  }
  return (
    <>

    
  
<div className="mb-3"  style={props.style}>
  <div className="container my-3" style={props.style}>
  <h1>Write your text here</h1>
  <textarea class="form-control" id="exampleFormControlTextarea1" onChange={handelOnChange} value={text} rows="10"></textarea>

<button className="btn btn-primary my-3 mx-3" onClick={handelUpChanange}>Convert to uppercase</button>
<button className="btn btn-danger my-3 mx-3" onClick={handelLpChanange}>convert to lowercase</button>
<button className="btn btn-warning my-3 mx-3" onClick={clearText}>clear text</button>
</div>
</div>
    </>
  )
}
