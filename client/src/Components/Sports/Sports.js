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
import "./Sports.css"


function Deportes() {
  const [sports, setSports] = useState(null)
    


  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);


  useEffect(() => {
    const getSports = async () => {
      try {
        let response = await axios.get(
          "/sports/sportify-sports",
         
        );

        setSports(response.data.deportes);
      
      } catch (error) {}
    };

    getSports();
  }, []);

  const mostrarDeportes = () => {
 
    
    return     sports.map((deporte, i) => {
      // console.log(`i: ${i} partido.sport.deporte: ${partido.sport.deporte}`)
     
      // setInscritosArray(partido.inscritos)
      return (
        <div class="mx-auto ">
          <Container key={deporte._id} className="container-deportes " class="w-75 p-3 mx-auto  ">
            <div class="card mt-50 mb-3 imagen-fondo">
              <div class="card-header ">
                <h5 class="card-title mx-auto ">{}</h5>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                <li class="list-group-item fondo-lista">
                    
                    <h6 class="h6-sports"> {deporte.deporte}</h6>
                    
                  </li>
                  
                </ul>

                
              </div>
            </div>
          </Container>
        </div>
      );
      });
  };

  return (
    <div class="">
      <body>
        <container class="mx-auto">
          <h1 class=" d-flex justify-content-center mt-50 h1-sports"> Deportes Disponibles</h1>
          <div class="boton"><a href="#" class="btn btn-danger mx-auto"><Link class="link" to="/Register"> Registrate</Link> </a></div>
          {sports ? (mostrarDeportes()) : (<img class="imagen-spiner" src="./images/Spin-1s-200px.gif"alt=""/>)}
        </container>
      </body>
    </div>
  );
}

export default Deportes;
