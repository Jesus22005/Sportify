import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardText,
  Container,
} from "reactstrap";
import "./Locations.css";

function Ubicaciones() {
  const [locations, setLocations] = useState([
    {
      nombre:"",
      deporte:"",
      precio:"",
      direccion:"",
      contacto:"",
    },
  ]);


  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);


  useEffect(() => {
    const getLocations = async () => {
      try {
        let response = await axios.get(
          "http://localhost:5000/locations/sportify-locations",
          { ...locations }
        );

        setLocations(response.data.ubicacion);
      
      } catch (error) {}
    };

    getLocations();
  }, []);

  const mostrarUbicaciones = () => {
 
    
    return     locations.map((lugar, i) => {
      // console.log(`i: ${i} partido.sport.deporte: ${partido.sport.deporte}`)
      console.log("inscritos", lugar.nombre);
      // setInscritosArray(partido.inscritos)
      return (
        <div class="mx-auto">
          <Container key={lugar._id} className="container-usuarios" class=" contenedor-locations mx-auto">
            <div class="card mt-50 mt-50-locations mb-3 contenedor-card">
              <div class="card-header contenedor-titulo">
                <h5 class="card-title mx-auto ">{lugar.nombre}</h5>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                <li class="list-group-item ">
                    
                    <h6>Deporte: {lugar.deporte}</h6>
                    
                  </li>
                  <li class="list-group-item ">
                    
                    <h6>Precio: {lugar.precio}</h6>
                    
                  </li>
                  
                  <li class="list-group-item ">
                    <h6>Direccion: {lugar.direccion}</h6>
                    
                  </li>
                  <li class="list-group-item ">
                    <h6>Contacto: {lugar.contacto}</h6>
                    
                    </li>
                  
                </ul>

                <a href="#" class="btn btn-primary mx-auto">
                  Pagina Web 
                </a>
              </div>
            </div>
          </Container>
        </div>
      );
      });
  };

  return  <body class="body-locations">
  <div class=""> 
  <container class="mx-auto">
     <h1 class=" d-flex justify-content-center mt-50 h1-locations">Centros Deportivos</h1>
  {locations ? mostrarUbicaciones() : "loading"}
  </container>
  </div>
  </body>
}

export default Ubicaciones;
