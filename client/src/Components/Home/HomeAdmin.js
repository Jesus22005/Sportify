import React, { useState } from "react";
import { Link, Outlet} from "react-router-dom"
import { NavbarBrand,  Toggle,Title,  Offcanvas,NavDropdown, Form,  Button, Container, FormControl, NavBar, OffcanvasHeader,  Collapse, NavbarToggler, NavLink, NavItem,UncontrolledDropdown, DropdownToggle, DropdownMenu, Nav ,DropdownItem, NavbarText } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function HomeAdmin() {

 
    return (
      
      <div>
        
  <header>    {


<div >
   
<nav class="navbar navbar-expand-md navbar-light bg-dark px-3">
  <a class="navbar-brand p-3 text-warning"  href="#"> <Link class="text-white" to="/HomeUser"> Sportify Admin </Link></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class=" collapse navbar-collapse " id="navbarNavAltMarkup">
    <div class="navbar-nav ">
      <a class="nav-item nav-link" href="#"> <Link class="text-white" to=""> Partidos </Link></a>
      <a class="nav-item nav-link " href="#"> <Link class="text-white" to="Users"> Usuarios </Link></a>
      <a class="nav-item nav-link " href="#"> <Link class="text-white" to="UserId"> Perfil </Link></a>
      <a class="nav-item nav-link " href="#"> <Link class="text-white" to=""> Instalaciones Deportivas </Link></a>
    </div>
  </div>
</nav>


</div>

}</header>
    <Outlet />

  <footer class="fixed-bottom">
  <ul class="nav justify-content-center bg-dark">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
  </footer>
      </div>
    );
  }
  
  export default HomeAdmin;
  
