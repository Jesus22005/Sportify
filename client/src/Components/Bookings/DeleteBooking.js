import {useEffect, useState} from "react"
import axios from "axios"
import {Routes, Route, Link, useNavigate} from "react-router-dom"
import {Form, FormGroup, Label, Input, FormText, Button, Container, Col , Row} from "reactstrap";


function DeleteBookings() {
  
    const navigate = useNavigate()
    const[ deleteBooking , setDeleteBooking] = useState({id:""})
  
    const onChangeInput = (e) =>{
        const {name, value} = e.target;
        setDeleteBooking({...deleteBooking, [name]: value})
        }

    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    const deleteBookingSubmit = async e =>{
    e.preventDefault()
    try {
       
            const response = await axios({
                method: "delete" ,
                 url: 'http://localhost:5000/bookings/deleteBooking', 
                 data: {...deleteBooking},
                headers: {Authorization: localStorage.getItem("firstLogin")}
            })
            
            setSuccessMessage(response.data.message)
            console.log(response.data.message)
            navigate("/HomeUser/BookingDeleted")
            }
            
            catch (error) {
                setErrorMessage(error.response.data.message)
            }
        
        }
  
    return (


      <div class="w-75 mx-auto mt-50">
<h1>Borrar Reserva</h1>
    <container class="p-3 mx-auto">
    <form onSubmit={deleteBookingSubmit} className=" ">
    <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Numero de Reserva</label>
    <div class="col-sm-10">
      <input type="Text" name="id" autocomplete="off" onChange={onChangeInput} class="form-control" id="inputPassword"/>
    </div>
    </div>

  
     <button type="submit" class="mx-auto centrar boton-borrar-ubicacion" > Borrar Reserva </button>
  </form>

  <div class="mt-50 mb-50" style={{display: successMessage? "block": "none"}}></div>
           <div style={{display: errorMessage? "block": "none"}}>{errorMessage}</div>
  </container>
</div> 


/* <div className="registerContainer">

  <h1 > Borrar Reserva</h1>
<Container className="formulario" > 

<Form  onSubmit={deleteBookingSubmit}>
   

   
   <FormGroup>
   
<Label for="exampleEmail">
Numero de Reserva
</Label>

<Input className="inputClass"
type="Text" name="id" onChange={onChangeInput}
/>

</FormGroup>




  <div style={{display: successMessage? "block": "none"}}>{successMessage}</div>
  <div style={{display: errorMessage? "block": "none"}}>{errorMessage}</div>



<Button type="submit">
Borrar Reserva
</Button>
</Form>
</Container>
</div> */

    
  );
}

export default DeleteBookings;