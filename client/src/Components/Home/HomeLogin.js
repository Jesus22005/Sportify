import React, { useState, useEffect} from "react";
import { Link, Outlet, useNavigate } from "react-router-dom"
import { NavbarBrand,  Toggle,Title,  Offcanvas,NavDropdown, Form,  Button, Container, FormControl, NavBar, OffcanvasHeader,  Collapse, NavbarToggler, NavLink, NavItem,UncontrolledDropdown, DropdownToggle, DropdownMenu, Nav ,DropdownItem, NavbarText } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



const HomeLogin = () =>{
    
  const role = localStorage.getItem('role')
  // console.log("role", role)
  const token = localStorage.getItem('firstLogin')
  
  const navigate = useNavigate()
  useEffect(()=>{
      if (!token) navigate('/')
  },[])


function homeUser() {

 
    return (
      
      <div>
        
  <header>    {


<div >
  
   
<nav class="navbar navbar-expand-md navbar-light bg-primary px-3">
  <a class="navbar-brand p-3 text-warning logo"  href="#"> <Link class="text-white" to="/HomeUser"> <span class="logo"/>  </Link></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class=""><i class=" icon-home fa-2x fas fa-home"/></span>
  </button>
  <div class=" collapse navbar-collapse " id="navbarNavAltMarkup">
    <div class="navbar-nav ">
      <a class="nav-item nav-link" href="#"> <Link class="text-white links"  data-toggle="collapse" data-target=".navbar-collapse" to="Matches"> Partidos </Link></a>
      <a class="nav-item nav-link " href="#"> <Link class="text-white links"  data-toggle="collapse" data-target=".navbar-collapse" to="Users"> Usuarios </Link></a>
      <a class="nav-item nav-link " href="#"> <Link class="text-white links"  data-toggle="collapse" data-target=".navbar-collapse"to="NewBooking"> Reservar </Link></a>
      <a class="nav-item nav-link " href="#"> <Link class="text-white links"  data-toggle="collapse" data-target=".navbar-collapse" to="NewMatch"> Crear Partido </Link></a>
      <a class="nav-item nav-link " href="#"> <Link class="text-white links"  data-toggle="collapse" data-target=".navbar-collapse" to="locations"> Instalaciones Deportivas </Link></a>
      <a class="nav-item nav-link " href="#"> <Link class="text-white links"   data-toggle="collapse" data-target=".navbar-collapse" to="UserId"> Perfil </Link></a>
      <a class="nav-item nav-link " href="#"> <Link class="text-white links"  data-toggle="collapse" data-target=".navbar-collapse" to="Sports"> Deportes </Link></a>
    </div>
  </div>
</nav>


</div>


}</header>
    <Outlet />

    <footer class="f ">
  <ul class="nav justify-content-center bg-primary fixed-bottom h-20 h-footer">
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


  function homeAdmin() {

 
    return (
      
      <div>
        
  <header>    {


<div >
   
<nav class="navbar navbar-expand-md navbar-light bg-secondary px-3 ">
  <a class="logo-admin navbar-brand p-3 text-warning"  href="#"> <Link class="text-dark logo-admin" to="/HomeUser"><span></span>  </Link></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <span class=""><i class=" icon-home fa-2x fas fa-home"/></span>
  </button>
  <div class=" collapse navbar-collapse " id="navbarNavAltMarkup">
  <div class="navbar-nav ">
      <a class="nav-item nav-link" href="#"> <Link class="text-white links"  data-toggle="collapse" data-target=".navbar-collapse" to="Matches"> Partidos </Link></a>
      <a class="nav-item nav-link " href="#"> <Link class="text-white links"  data-toggle="collapse" data-target=".navbar-collapse" to="Users"> Usuarios </Link></a>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-white links" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       Deportes
        </a>
        <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#"><Link class="text-white links"   data-toggle="collapse" data-target=".navbar-collapse" to="Sports"> Deportes </Link></a>
          <a class="dropdown-item" href="#"><Link class="text-white links"   data-toggle="collapse" data-target=".navbar-collapse" to="NewSport"> Crear Deporte </Link></a>
          <a class="dropdown-item" href="#"><Link class="text-white links"   data-toggle="collapse" data-target=".navbar-collapse" to="DeleteSport"> Borrar Deporte </Link></a>
        </div>
        </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-white links" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Ubicaciones
        </a>
        <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#"><Link class="text-white links"   data-toggle="collapse" data-target=".navbar-collapse" to="locations"> Instalaciones Deportivas </Link></a>
          <a class="dropdown-item" href="#"><Link class="text-white links"   data-toggle="collapse" data-target=".navbar-collapse" to="NewLocation"> Crear Instalacion </Link></a>
          <a class="dropdown-item" href="#"><Link class="text-white links"   data-toggle="collapse" data-target=".navbar-collapse" to="UpdateLocation"> Modificar Instalacion </Link></a>
          <a class="dropdown-item" href="#"><Link class="text-white links"   data-toggle="collapse" data-target=".navbar-collapse" to="DeleteLocation"> Borrar Instalacion </Link></a>
        </div>
        </li>
      <a class="nav-item nav-link " href="#"> <Link class="text-white links"   data-toggle="collapse" data-target=".navbar-collapse" to="UserId"> Perfil </Link></a>
      <a class="nav-item nav-link " href="#"> <Link class="text-white links" data-toggle="collapse" data-target=".navbar-collapse" to="Sports"> Deportes </Link></a>
      
    </div>
  </div>
</nav>


</div>

}</header>
    <Outlet />

    <footer class="f ">
  <ul class="nav justify-content-center bg-secondary fixed-bottom h-20 h-footer">
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

  return(
    <div>
        {
            role == 0 ? homeUser() : homeAdmin()
        }
    </div>
)
}

export default HomeLogin;
  
 
  




 