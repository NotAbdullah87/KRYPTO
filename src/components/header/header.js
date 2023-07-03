import React from 'react'
import {Container} from '@mui/material'
import Logo from './logo.png'
import ForumIcon from '@mui/icons-material/Forum';


const Header = () => {
  return (

    <>
    <Container>
    <div>    <>
    <nav style={{marginLeft:"0%",
    background: "rgba( 0, 2, 53, 0.45 )" ,
   // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 4px )",
    webkitBackdropFilter: "blur( 4px )",
    borderRadius: "2px",
   // height : "10%"
  //  border: "1px solid rgba( 255, 255, 255, 0.18 )",
  
  }} class="navbar navbar-expand-lg navbar-light fixed-top">
    <a class="navbar-brand" style={{color:"white",fontFamily:"outfit",fontWeight:800,fontSize:"20px",marginLeft:"5%"}} href="#">KRYPTO.</a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{backgroundColor:"#fff",fontSize:"10px"}}>
    <span class="navbar-toggler-icon" style={{color:"white"}}></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto" style={{marginLeft:"40%"}}>
      <li class="nav-item active">
        <a class="nav-link" style={{color:"#c1bfd1",fontFamily:"poppins",marginRight:'50px'}} href="#">Home <span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item active">
        <a class="nav-link" style={{color:"#c1bfd1",fontFamily:"poppins",marginRight:"50px"}} href="#">Buy Crypto <span class="sr-only">(current)</span></a>
      </li>

      
      <li class="nav-item active">
        <a class="nav-link" style={{color:"#c1bfd1",fontFamily:"poppins",marginRight:"50px"}} href="#">Exchange<span class="sr-only">(current)</span></a>
      </li>

    
      <li class="nav-item active">
        <a class="nav-link" style={{color:"#c1bfd1",fontFamily:"poppins",marginRight:"50px"}} href="#">Wallet<span class="sr-only">(current)</span></a>
      </li>

    
 

    </ul>

  </div>
</nav>
    </></div>
    </Container>
    </>
   
  )
}

export default Header