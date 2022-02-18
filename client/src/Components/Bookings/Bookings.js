import {useEffect, useState} from "react"
import axios from "axios"
import {Routes, Route, Link} from "react-router-dom"
import {Card,CardBody, CardTitle, CardSubtitle, CardText, Container} from "reactstrap"



function Reservas(){

    const [bookings, setBookings] = useState([{
        usuario: "",
        partido: "",
    }])

    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    useEffect(()=>{
        const getBookings = async ()=>{
            try {
                let response = await axios.get("http://localhost:5000/bookings/sportify-bookings", {...bookings})
               

                console.log(response.data)
                setBookings(response.data.bookings)
                

            } catch (error) {
               
            }
        }

        getBookings()

    }, [])

    const mostrarReservas = ()=>{

        return(

            bookings.map((reserva)=>{
                return(

                    <div className="container-usuarios">
                        <Link  key={reserva._id} to={`/users/${reserva._id}`}>
                        <Container   >
                        <Card className="container-card" >
                             <CardBody >
                             <CardTitle tag="h5" >
                             {}
                             </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6" >
                               {}
                            </CardSubtitle>
                            <CardText>
                            {}
                            </CardText>
                        
                            </CardBody>
                        </Card>
                        </Container>
                    </Link>

                    </div>

                    
                //    <div key={usuario._id} className="container-usuarios"  > 
                //    <Container>
                //         <Card >
                //             <CardBody className="container-card">
                //             <CardTitle tag="h5" >
                //             {usuario.nombre}
                //             </CardTitle>
                //             <CardSubtitle
                //                 className="mb-2 text-muted"
                //                 tag="h6" >
                //                {usuario.edad}
                //             </CardSubtitle>
                //             <CardText>
                //             {usuario.descripcion}
                //             </CardText>
                            
                //             </CardBody>
                //         </Card>
                        
                   
                //    </Container>
                        
                        
                 
                //         </div>


                   

                )
            })



       )
    }
    return(

        <div>
            { bookings ? mostrarReservas() : "loading"}
        </div>

    )
}

export default Reservas;