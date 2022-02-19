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
import "./Matches.css";

function Partidos() {
  const [matches, setMatches] = useState([])
let inscritos0;

  // const [matches, setMatches] = useState([
  //   {
  //     sport: "",
  //     jugadores: "",
  //     cupos: "",
  //     date: "",
  //     hora: "",
  //     lugar: "",
  //     precio: "",
  //     user: "",
  //     inscritos: "",
  //   },
  // ]);

  const [inscritos, setInscritos] = useState([]);

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  // const[inscritosArray, setInscritosArray] = useState(null)
  useEffect(() => {
    const getMatches = async () => {
      try {
        let response = await axios.get(
          "/matches/sportify-matches"
        );

        let partidos = response.data.partidos
         inscritos0 = partidos.map(item =>{
          return item.inscritos
        })
       
        
        console.log(response)
        setInscritos(inscritos0)
        setMatches(response.data.partidos);
        // setInscritos(matches.inscritos);
      
      } catch (error) {}
    };

    getMatches();
    
  }, []);

  // let  inscritos2;

  const getInscritos = async () =>{
    inscritos.map(item =>{return (
        <div key={item._id}>
          {item.map(i =>{ {console.log("nombre" ,i.nombre)}
            return <p  key={i.index} >{i.nombre}</p>})
           } 
            </div>
   ) });
   
  };



  const mostrarPartidos = () => {

    
    
    // {inscritos.map(item =>{return (
    //   <div key={item._id}>
    //     {item.map(i =>{ {console.log("nombre" ,i.nombre)}
    //       return <p  key={i.index} >{i.nombre}</p>})
    //      } )
    //       </div>) })}

        

       console.log("matches",inscritos);
    return matches.map((partido,inscritos, nombre, i) => {
      // console.log("inscritos", partido.inscritos);
      // setInscritosArray(partido.inscritos)
      return (



<div class="mx-auto">
          <Container key={partido._id} className="container-usuarios" class=" contenedor-locations mx-auto">
            <div class="card mt-50 mt-50-locations mb-3 contenedor-card">
              <div class="card-header contenedor-titulo">
                <h5 class="card-title mx-auto ">{partido.sport.deporte}</h5>
              </div>
              <div class="card-body ">
                <ul class="list-group list-group-flush">
                <li class="list-group-item ">
                    
                    <h6>Fecha: {partido.date}</h6>
                    
                  </li>
                  <li class="list-group-item ">
                    
                    <h6>Cupos: {partido.cupos}</h6>
                    
                  </li>
                  
                  <li class="list-group-item ">
                    <h6>Hora: {partido.hora}</h6>
                    
                  </li>
                  <li class="list-group-item ">
                    <h6>Jugadores:  {partido.jugadores}</h6>
                    
                    </li>
                   < li class="list-group-item ">
                    <h6>Direccion: {partido.lugar.direccion}</h6>
                    
                    </li>
                    <li class="list-group-item ">
                    <h6>Contacto: {partido.lugar.contacto}</h6>
                    
                    </li>
                    <li class="list-group-item card-matches">
                    <h6>Numero de Partido: {partido._id}</h6>
                    
                    </li>
                    <li class="list-group-item card-matches">
                    <h6>Inscritos: {partido.inscritos.map((ins, ) => <h6 key={ins._id}>@{ins.nombreUsuario}</h6>)}</h6>
                    
                    </li>

                    <p class="card-text mx-auto card-matches">
                   Pare realizar una reserva, copia el localizador de partido y
                   presiona el siguiente boton.
                   </p>
                  
                </ul>

                <a href="#" class="btn btn-dark  mx-auto boton-matches card-matches">
                   <Link class="link-matches" to="/HomeUser/NewBooking"> Reservar</Link>
                </a>
                
              </div>
            </div>
          </Container>
        </div>
      );
      });
  };






        // <div class="mx-auto">
        //   <Container key={partido._id} className="container-usuarios" class="w-75 p-3 mx-auto">
        //     <div class="card mt-50 mb-3 ">
        //       <div class="card-header bg-dark">
        //         <h5 class="card-title mx-auto text-white">{partido.sport.deporte}</h5>
        //       </div>
        //       <div class="card-body">
        //         <ul class="list-group list-group-flush">
        //           <li class="list-group-item ">
                    
        //             <h6>Fecha: {partido.date}</h6>
                    
        //           </li>
        //           <li class="list-group-item ">
        //             <h6>Cupos Disponibles: {partido.cupos}</h6>
                    
        //           </li>
        //           <li class="list-group-item ">
        //             <h6>Hora: {partido.hora}</h6>
                    
        //           </li>
        //           <li class="list-group-item">
        //             <h6>Jugadores:  {partido.jugadores}</h6>
                   
        //           </li>
        //           <li class="list-group-item">
        //             <h6> {partido.lugar.nombre}</h6>
        //             <h6>Direccion: {partido.lugar.direccion}</h6>
                    
        //           </li>
        //           <li class="list-group-item">
        //             <h6>Contacto: {partido.lugar.contacto}</h6>
                    
        //           </li>
        
        //           <li class="list-group-item">
        //           {/* <h6>Inscritos:</h6> {console.log(inscritos.nombre)}, {inscritos.map((item) => {if(item.length === 0 ){ return "No hay Inscritos" } else{

        //         return (
        //           <h6 key={item._id} >
        //             {item._id}</h6>);}})} */}

        //       {/* {inscritos.map(item =>{return (
        //         <div key={item._id}>
        //           {item.map(i =>{ {console.log("nombre" ,i.nombre)}
        //             return <p  key={i.index} >{i.nombre}</p>})
        //            } )
        //             </div>) })} */}


        //           </li>

        //           <li class="list-group-item">
        //           <h6>Localizador:  </h6> <h6 class="text-danger">{partido._id}</h6>
                   
        //           </li>
                  
        //         </ul>

        //         <p class="card-text mx-auto">
        //           Pare realizar una reserva, copia el localizador de partido y
        //           presiona el siguiente boton.
        //         </p>

        //         <a href="#" class="btn btn-primary mx-auto">
        //          <Link to="/HomeUser/NewMatch"> Realizar Reserva </Link>
        //         </a>
        //       </div>
        //     </div>
        //   </Container>
        // </div>
  

  return <body class="body-locations">
  <div class=""> 
  <container class="mx-auto">
     <h1 class=" d-flex justify-content-center mt-50 h1-locations">Partidos </h1>
  <div>{matches ? mostrarPartidos() : "loading"}</div>;
  </container>
  </div>
  </body>
}

export default Partidos;

