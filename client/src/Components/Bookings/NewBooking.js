import {useEffect, useState} from "react"
import axios from "axios"
import {Routes, Route, Link , useNavigate} from "react-router-dom"
import {Form, FormGroup, Label, Input, FormText, Button, Container, Col , Row} from "reactstrap";



function NewBookings() {
  
    const navigate = useNavigate()

    const[ newBooking , setNewBooking] = useState(
        {
            partidoId:"",
            
}
    )



    const onChangeInput = (e) =>{
        const {name, value} = e.target;
        setNewBooking({...newBooking, [name]: value})
        }

    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    const newBookingSubmit = async e =>{
    e.preventDefault()
    try {
       
            const response = await axios({
                method: "post" ,
                 url: '/bookings/newBooking', 
                 data: {...newBooking},
                headers: {Authorization: localStorage.getItem("firstLogin")}
            })
            
            setSuccessMessage(response.data.message)
            console.log(response)
            navigate("/HomeUser/NewBookingView")
            }
            
            catch (error) {
                setErrorMessage(error.response.data.message)
            }
        
        }

        // console.log()
       




    return (



<div class="w-75 mx-auto mt-50-login container-login">
<h1 class="h1-login">Crear Reserva</h1>
    <container class="p-3 mx-auto">
    <form onSubmit={newBookingSubmit}>
<div class="mb-3 row">
<label for="inputPassword" class="col-sm-2 col-form-label">Numero de Partido</label>
    <div class="col-sm-10">
      <input type="Text" required autoComplete="off" name="partidoId" autocomplete="off" onChange={onChangeInput} class="form-control" id="inputPassword"/>
    </div>
  </div>
  
     <button type="submit" class="mx-auto centrar-login" > Crear Reserva </button>
  </form>

  <div class="mt-50 mb-50 mb50-login" style={{display: successMessage? "block": "none"}}></div>
           <div style={{display: errorMessage? "block": "none"}}>{errorMessage}</div>
  </container>
</div> 

       
/* <div class="w-75 mx-auto mt-50">
<h1 > Crear Reserva</h1>
  
<form onSubmit={newBookingSubmit}>
<div class="mb-3 row">
<label for="inputPassword" class="col-sm-2 col-form-label">Numero de Partido</label>
    <div class="col-sm-10">
    <Input className="inputClass"
type="Text" name="partidoId" onChange={onChangeInput}/>
    </div>
  </div>
     <button type="submit" class="mx-auto centrar" > Reservar </button>
  </form>



<div style={{display: successMessage? "block": "none"}}>{successMessage}</div>
<div style={{display: errorMessage? "block": "none"}}>{errorMessage}</div>

</div> */



    
  );
}

export default NewBookings;
