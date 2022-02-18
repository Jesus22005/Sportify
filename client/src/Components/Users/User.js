import {useDebugValue, useEffect, useState} from "react"
import axios from "axios"
import {Card,CardBody,Button, CardTitle, CardSubtitle, CardText,ButtonGroup, Container} from "reactstrap"
import { useParams, useHeaders, useNavigate,Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./User.css"




    const Usuario = () => {
        // const { userId } = useParams();
    
        const [user, setUser] = useState({});
        const [match, setMatch] = useState([]);
        const [booking, setBooking] = useState([]);

   


    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    


    useEffect(() => {
        const getUser = async () => {
            const response = await axios({
                url:'http://localhost:5000/users/sportify-users/id', 
                headers: {Authorization: localStorage.getItem("firstLogin")}
            } 
            )
            
            setUser(response.data.userName);
            setMatch(response.data.buscarPartidos);
            setBooking(response.data.buscarReservas);
            console.log(response.data)
            };
        getUser();
    }, []);



    
   

    const mostrarUsuario = ()=>{

        return (
          <body className="body-profile">
            <div className="container-profile">
              <Container>
                <h1 className="h1-profile ">
                  Perfil <i class="fas fa-user-circle"></i>
                </h1>
                <div class="card mt-50 mt-50-locations mb-3 contenedor-card">
                  <div class="card-header contenedor-titulo-user">
                    <h5 class="card-title mx-auto ">
                      {" "}
                      {user.nombre} {user.apellidos}
                    </h5>
                  </div>
                  <div class="card-body">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item ">
                        <h6>Usuario: {user.nombreUsuario}</h6>
                      </li>
                      <li class="list-group-item ">
                        <h6>Edad: {user.edad}</h6>
                      </li>

                      <li class="list-group-item ">
                        <h6>Genero: {user.genero}</h6>
                      </li>
                      <li class="list-group-item ">
                        <h6>Ciudad: {user.localidad}</h6>
                      </li>
                      <li class="list-group-item ">
                        <h6>Correo Electronico: {user.email}</h6>
                      </li>
                      <li class="list-group-item ">
                        <p>Descripcion: {user.descripcion}</p>
                      </li>
                    </ul>

                    <a href="#" class="btn btn-primary mx-auto boton-profile">
                      <Link className="link-profile" to="/HomeUser/UpdateUser">
                        Modificar Datos
                      </Link>
                    </a>
                  </div>
                </div>

                <div class="card mt-50 mt-50-locations mb-3 contenedor-card">
                  <div class="card-header contenedor-titulo-user">
                    <h5 class="card-title mx-auto  "> Tus Partidos</h5>
                  </div>
                  <div class="card-body">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item ">
                        <h6>
                          Partidos:{" "}
                          {match.map((usuari, sport, lugar, i) => {
                            return (
                              <div class="card-body">
                                {" "}
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item ">
                                    <h6 key="usuari._id">
                                      {" "}
                                      Deporte: {usuari.sport.deporte}
                                    </h6>
                                    <h6 key="usuari._id">
                                      Fecha: {usuari.date}
                                    </h6>
                                    <h6 key="usuari._id">
                                      Hora: {usuari.hora}
                                    </h6>
                                    <h6 key="usuari._id">
                                      Lugar: {usuari.lugar.nombre}
                                    </h6>
                                  </li>
                                </ul>
                              </div>
                            );
                          })}
                        </h6>
                      </li>
                    </ul>

                    <a href="#" class="btn btn-primary mx-auto boton-profile ">
                      <Link className="link-profile" to="/HomeUser/DeleteMatch">
                        Borrar Partido
                      </Link>
                    </a>
                  </div>
                </div>

                <div class="card mt-50 mt-50-locations mb-3 contenedor-card">
                  <div class="card-header contenedor-titulo-user ">
                    <h5 class="card-title mx-auto "> Tus Reservas</h5>
                  </div>
                  <div class="card-body">
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item ">
                        <h6>
                          Partidos:{" "}
                          {booking.map((res, partido, usuario, i) => {
                            return (
                              <div class="card-body">
                                {" "}
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item ">
                                    <h6 key="res._id">
                                      {" "}
                                      Deporte: {}
                                    </h6>
                                    <h6 key="res._id">
                                      Fecha: {res.partido.date}
                                    </h6>
                                    <h6 key="res._id">
                                      Hora: {res.partido.hora}
                                    </h6>
                                    <h6 key="res._id">
                                      Lugar: {res.partido.lugar.nombre}
                                    </h6>
                                    <h6 key="res._id">
                                      Numero: {res._id}
                                    </h6>
                                  </li>
                                </ul>
                              </div>
                            );
                          })}
                        </h6>
                      </li>
                    </ul>

                    <a href="#" class="btn btn-primary mx-auto boton-profile">
                      <Link
                        className="link-profile"
                        to="/HomeUser/DeleteBooking"
                      >
                        Borrar Reserva
                      </Link>
                    </a>
                  </div>
                </div>
              </Container>
            </div>
            <div class="boton-borrar">
              <button type="button" class="btn btn-dark mx-auto ">
                <Link className="link-profile" to="/HomeUser/DeleteUser">
                  Eliminar Cuenta
                </Link>
              </button>
            </div>
          </body>
        );



       
    }
    return(

        <div >
            {user ? mostrarUsuario() : "loading" }
            
        </div>

    )
}

export default Usuario;





{/* <Card >
                             <CardBody className="container-card ">
                             <CardTitle tag="h5" >
                             {user.nombre} {user.apellidos}
                             </CardTitle>
                             <CardText>
                             <h6>Usuario:</h6>{user.nombreUsuario}
                            </CardText>
                            <CardText>
                            <h6>Edad:</h6> {user.edad}
                            </CardText>
                            <CardText>
                            <h6>Genero:</h6> {user.genero}
                            </CardText>
                            <CardText>
                            <h6>Ciudad:</h6>{user.localidad}
                            </CardText>
                            <CardText>
                            <h6>Email:</h6>{user.email}
                            </CardText>
                            <CardText>
                            <h6>Descripcion:</h6>{user.descripcion}
                            </CardText>
                            </CardBody>
                        </Card> */}


                        // <Button variant="primary" size="md" >
                        // <Link to="/HomeUser/UpdateUser">Modificar Datos</Link>
                        // </Button>

                        // <Card>
                          
                        // <CardText>
                        // {console.log(match), <h6>{match}</h6>}
                        //     {/* <h6>Tus Partidos:</h6>{match.map(item =>{
                        //         return <h6 key="item._id">{item.date}</h6>
                        //     }), console.log(match)} */}
                        //   </CardText>
                        // </Card>
                        // <Button variant="primary" size="md" >
                        // <Link to="/HomeUser/DeleteMatch">Borrar Partido</Link>
                        // </Button>
                        // <Card>
                          
                        //   <CardText>
                        //        {/* <h6>Tus Reservas:</h6>{user.reservas.map(item => {return (<div key={item._id}><h3>{item._id}</h3></div>)})}; */}
                        //     </CardText>
                        //   </Card>
                        //   <Button variant="primary" size="md" >
                        // <Link to="/HomeUser/DeleteBooking">Borrar Reserva</Link>
                        // </Button>
