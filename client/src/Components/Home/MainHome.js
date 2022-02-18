import React, { useState } from "react";
import { Link, Outlet} from "react-router-dom"
import { NavbarBrand,  Toggle,Title,  Offcanvas,NavDropdown, Form,  Button, Container, FormControl, NavBar, OffcanvasHeader,  Collapse, NavbarToggler, NavLink, NavItem,UncontrolledDropdown, DropdownToggle, DropdownMenu, Nav ,DropdownItem, NavbarText } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MainHome.css"


function MainHome() {

 
    return (
      
      
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
     
    );
  }
  
  export default MainHome;