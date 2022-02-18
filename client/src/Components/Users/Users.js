import {useEffect, useState} from "react"
import axios from "axios"
import {Routes, Route, Link} from "react-router-dom"
import {Card,CardBody, CardTitle, CardSubtitle, CardText, Container} from "reactstrap"
import Usuario from "./User"
import './Users.css'

function Usuarioss(){

    const [users, setUsers] = useState([{
        nombre: "",
        edad: "",
        genero: "",
        localidad: "",
        deportesFavoritos: "",
        descripcion: ""
    }])

    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    useEffect(()=>{
        const getUsers = async ()=>{
            try {
                let response = await axios.get("http://localhost:5000/users/sportify-users", {...users})
               

                console.log(response.data)
                setUsers(response.data.usuarios)
                

            } catch (error) {
               
            }
        }

        getUsers()

    }, [])

    const mostrarUsuarios = ()=>{

        return(

            users.map((usuario)=>{
                return(

                    <div className="container-usuarios">
                   
                        <Container key={usuario._id} className="container-usuarios">


                        

                        <Container>
              
                <div class="card mt-50 mt-50-locations mb-3 contenedor-card">
                  <div class="card-header contenedor-titulo-user">
                    <h5 class="card-title mx-auto ">
                      
                      {usuario.nombre} {usuario.apellidos} 
                    </h5>
                  </div>
                  <div class="card-body">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item ">
                        <h6>Usuario: {usuario.nombreUsuario}</h6>
                      </li>
                      <li class="list-group-item ">
                        <h6>Edad: {usuario.edad}</h6>
                      </li>

                      <li class="list-group-item ">
                        <h6>Genero: {usuario.genero}</h6>
                      </li>
                      <li class="list-group-item ">
                        <h6>Ciudad: {usuario.localidad}</h6>
                      </li>
                      <li class="list-group-item ">
                        <h6>Correo Electronico: {usuario.email}</h6>
                      </li>
                      <li class="list-group-item ">
                        <p>Descripcion: {usuario.descripcion}</p>
                      </li>
                    </ul>

                   
                  </div>
                </div>
              </Container>

                        
                        </Container>
                  

                    </div>



                   

                )
            })



       )
    }
    return(

        <div>
            <h1 className="h1-profile ">Usuarios <i class="fas fa-users"></i> </h1>
            { users ? mostrarUsuarios() : "loading"}
        </div>

    )
}

export default Usuarioss;





// <Card >
//                              <CardBody className="container-card">
//                              <CardTitle tag="h5" >
//                              {usuario.nombre} {usuario.apellidos}
//                              </CardTitle>
//                              <CardText>
//                              <h6>Usuario:</h6>{usuario.nombreUsuario}
//                             </CardText>
//                             <CardText>
//                             <h6>Edad:</h6> {usuario.edad}
//                             </CardText>
//                             <CardText>
//                             <h6>Genero:</h6> {usuario.genero}
//                             </CardText>
//                             <CardText>
//                             <h6>Ciudad:</h6>{usuario.localidad}
//                             </CardText>
//                             <CardText>
//                             <h6>Email:</h6>{usuario.email}
//                             </CardText>
//                             <CardText>
//                             <h6>Descripcion:</h6>{usuario.descripcion}
//                             </CardText>
//                             </CardBody>
//                         </Card>