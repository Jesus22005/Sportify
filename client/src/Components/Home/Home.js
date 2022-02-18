import React, { useState } from "react";
import { Link, Outlet} from "react-router-dom"
import { NavbarBrand,  Toggle,Title,  Offcanvas,NavDropdown, Form,  Button, Container, FormControl, NavBar, OffcanvasHeader,  Collapse, NavbarToggler, NavLink, NavItem,UncontrolledDropdown, DropdownToggle, DropdownMenu, Nav ,DropdownItem, NavbarText } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"


function Home() {

 
    return (
      
      <div>
        
  <header>    {


<div >
  
   
<nav class="navbar navbar-expand-md navbar-light bg-dark px-3 ">
  <a class="navbar-brand p-3 text-warning logo"  href="#"><link to="home/"></link> </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class=" "> <i class=" icon-home fa-2x fas fa-home"></i>

</span>
  </button>
  <div class=" collapse navbar-collapse " data-toggle="collapse" data-target=".navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav nav-contenedor" >
    <a class="nav-item nav-link" href="#"> <Link class="text-white links"  to="login"> Iniciar Sesion </Link></a>
      <a class="nav-item nav-link " href="#"> <Link class="text-white links"  to="Register"> Registro </Link></a>
      <a class="nav-item nav-link " href="#"> <Link class="text-white links"  to="Locations"> Centros Deportivos </Link></a>
      <a class="nav-item nav-link " href="#"> <Link class="text-white links"  to="Sports"> Deportes </Link></a>
    </div>
  </div>
</nav>


</div>}


</header>


  <Outlet />

  <footer class="f ">
  <ul class="nav justify-content-center bg-dark fixed-bottom h-20 h-footer">
  <li class="nav-item">
    <a class="nav-link active" href="#"><i class="icon-footer fa-2x fab fa-facebook-square"></i></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><i class="icon-footer fa-2x fab fa-instagram"></i></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><i class="icon-footer fa-2x fab fa-youtube"></i></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><i class="icon-footer fa-2x fas fa-envelope-open"></i></a>
  </li>
  <p class=" p-footer"> © 2022 Sportify, SA</p>
</ul>
  </footer>
      </div>
    );
  }
  
  export default Home;
  




  // import "./stylesComponents/header.css" import React, { useState } from 'react';
  //  import Navbar from 'react-bootstrap/Navbar' import { Container, Nav } from "react-bootstrap"; import { Link } from "react-router-dom";
  //    const Header = () => {     const [expanded, setExpanded] = useState(false);
  //          return (         <Navbar expanded={expanded} bg="light" expand="md">             <Container fluid>                
  //           <Navbar.Brand href="http://localhost:5000/%22%3EGestor Reservas</Navbar.Brand>                 
  //          <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setExpanded(expanded ? false : "expanded")} />  
  //                         <Navbar.Collapse id="navbarScroll">                    
  //                          <Nav                         className="my-lg-0"                         style={{ maxHeight: '100px' }}                         navbarScroll                     >                       
  //                            <Link to="/" onClick={() => setExpanded(false)} className="nav-link">Home</Link>                        
  //                             <Link to="/NuestrosCentros"