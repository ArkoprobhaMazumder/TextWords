import React from 'react'

export default function Navbar(props) {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div div className="container-fluid">
    <a className="navbar-brand" href="/">TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
  <button type="button" class="btn btn-primary btn-sm" value={props.value} onClick={props.mode}>{props.value}</button>
  </div>
</nav>
    
    </>
  )
}
