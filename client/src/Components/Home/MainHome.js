import React, { useState } from "react";
import { Link, Outlet} from "react-router-dom"
import { NavbarBrand,  Toggle,Title,  Offcanvas,NavDropdown, Form,  Button, Container, FormControl, NavBar, OffcanvasHeader,  Collapse, NavbarToggler, NavLink, NavItem,UncontrolledDropdown, DropdownToggle, DropdownMenu, Nav ,DropdownItem, NavbarText } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MainHome.css"


function MainHome() {

 
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

</div>}


</header>

      
       <Container className="container-home">
           <div className="container-principal">
               <h1>Registrate en tu Red Social Deportiva!!</h1>

               <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.anahuac.mx/mexico/sites/default/files/noticias/Foro-virtual-El-deporte-dentro-y-fuera-de-la-cancha-2.jpg" class="d-block w-100 imagen-home" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
           </div>
       </Container>

       </div>
     
    );
  }
  
  export default MainHome;