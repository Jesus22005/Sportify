import {useEffect, useState} from "react"
import axios from "axios"
import {Routes, Route, Link, useNavigate} from "react-router-dom"
import {Form, FormGroup, Label, Input, FormText, Button, Container, Col , Row} from "reactstrap";
import "./NewSportView.css"


function DeleteBookingsView() {
  
    const role = localStorage.getItem('role')
    // console.log("role", role)
    const token = localStorage.getItem('firstLogin')

    return (
      <body>
        <h1 className="h1-view"> Reserva Borrada Correctamente <span><Link to="/HomeUser/MainHomeUser"><input class="boton-view btn btn-primary" type="reset" value="Home"/></Link></span></h1>
        <div class=" contenedor-view mx-auto mt-50">
          <div class=""></div>
        </div>
      </body>
    );
}

export default DeleteBookingsView;